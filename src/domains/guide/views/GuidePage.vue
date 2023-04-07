<template>
  <v-main>
    <v-container fluid>
      <v-card title="AWS EC2에 Jenkins 설치 및 Vuejs 배포 과정">
        <!-- variant : default / accordion / inset /popout -->
        <v-expansion-panels
          variant="default"
          class="pa-2"
          v-model="panel"
          multiple
        >
          <v-expansion-panel>
            <v-expansion-panel-title>
              AWS EC2 "Linux t2.micro" 인스턴스 생성
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-card>
                <v-card-item>
                  프리티어가 적용되는 Linux t2.micro 유형으로 생성
                </v-card-item>
                <v-card-item>
                  인스턴스 보안그룹에 젠킨스를 위한 인바운드 규칙 8080 포트추가
                </v-card-item>
                <v-card-item>
                  학습을 위한 설정이므로 개방범위는 0.0.0.0/0 으로 설정함
                </v-card-item>
              </v-card>
              <v-card :class="dvCls">
                <v-card-item>
                  <span :class="infoCls">참고</span><br />
                  인스턴스 재기동 시 IP 변경되는 것 확인되어 고정IP 부여를 위해
                  탄력적IP 할당하여 인스턴스에 연결함
                </v-card-item>
              </v-card>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title>
              EC2 인스턴스에 JAVA 설치
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-card>
                <v-card-item>
                  Jenkins 설치를 위해 JAVA 설치(11버전)
                </v-card-item>
                <v-card-item>
                  설치가능 자바확인<br />
                  sudo yum list | grep java-11
                </v-card-item>
                <v-card-item>
                  설치<br />
                  sudo yum install -y java-11-amazon-corretto-devel.x86_64
                </v-card-item>
              </v-card>
              <v-card :class="dvCls">
                <v-card-item>
                  <span :class="infoCls">참고</span><br />
                  java8 설치하여 진행하였으나 젠킨스 설치 후 실행 오류 발생
                </v-card-item>
              </v-card>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title>
              EC2 인스턴스에 Jenkins 설치
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-card>
                <v-card-item>
                  <span :class="infoCls"> {{ extLinkInfo[1].linkText }} </span>
                  &nbsp;
                  <v-btn
                    border
                    class="bg-light-blue-darken-4"
                    prepend-icon="mdi-check"
                    variant="text"
                    size="x-small"
                    @click="fnGoGlink(1)"
                  >
                    이동
                  </v-btn>
                  <br />
                  {{ extLinkInfo[1].url }}
                </v-card-item>
              </v-card>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title>
              EC2 인스턴스에 Git 설치
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-card>
                <v-card-item>
                  #Perform a quick update on your instance<br />
                  sudo yum update -y
                </v-card-item>
                <v-card-item>
                  #Install git in your EC2 instance<br />
                  sudo yum install git -y
                </v-card-item>
                <v-card-item>
                  #Check git version<br />
                  git version
                </v-card-item>
              </v-card>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title>
              Github webhook 설정
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-card>
                <v-card-item>
                  배포할 GitHub Repository <br />
                  Settings > Webhooks > Add webhook<br />
                  - Payload URL http://젠킨스IP:포트/github-webhook/<br />
                  - Content type application/json<br />
                  - Just the push event 선택<br />
                  - Active 체크
                </v-card-item>
              </v-card>
              <v-card :class="dvCls">
                <v-card-item>
                  <span :class="infoCls">참고</span><br />
                  Jenkins에서 Github 연결시 Personal access token 필요
                </v-card-item>
              </v-card>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title>
              Github Personal access tokens
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-card>
                <v-card-item>
                  GitHub > 개인 프로필 > Settings > Developer settings<br />
                  Personal access tokens > Generate new token<br />
                  - Select scopes : repo, admin:repo_hook 선택
                </v-card-item>
              </v-card>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title>
              Jenkins Github 연결 및 item 생성
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-card>
                <v-card-item>
                  배포할 VueJS 젠킨스 빌드를 위하여 NodeJS 관련 설정<br />
                  - Jenkins 관리 > Plugins [NodeJs 플러그인] 설치<br />
                  - Jenkins 관리 > Tools [Add NodeJS]
                </v-card-item>
                <v-card-item>
                  GitHub와 연결을 위한 Credentials 추가<br />
                  - Jenkins 관리 > Manage Credentials > Add Credentials<br />
                  - GitHub에서 생성한 Personal access tokens을 비밀번호로 적용
                </v-card-item>
                <v-card-item>
                  Jenkins Item 생성 <br />
                  - Freestyle Project로 생성 <br />
                  - 소스코드관리는 Git <br />
                  - Git Repository 및 배포 브랜치 설정<br />
                  - 빌드 유발 항목 중 GitHub hook trigger for GITScm polling
                  체크 <br />
                  - 빌드 환경 항목 중 Provide Node & npm bin/ folder to Path
                  체크 <br />
                  - 설치한 NodeJs 플러그인 선택 <br />
                  - Build Steps(Excute shell) <br />
                </v-card-item>
                <v-card-item>
                  <span :class="accCls"> Excute shell에 아래 내용 입력 </span>
                  <v-card-text :class="cmdCls">
                    cd /var/lib/jenkins/workspace/{생성한 Jenkins Item 이름}<br />
                    npm install<br />
                    npm run build
                  </v-card-text>
                </v-card-item>
              </v-card>
              <v-card :class="dvCls">
                <v-card-item>
                  <span :class="infoCls">참고</span><br />
                  - t2.micro 인스턴스 유형 메모리 1GB<br />
                  - 젠킨스 배포 수행결과 EC2 멈춤 현상 발생하여 Swap 메모리
                  설정하여 메모리 부족 현상 해결
                </v-card-item>
              </v-card>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              스왑 파일을 이용한 스왑 공간 할당
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-card>
                <v-card-item>
                  # swapfile 메모리를 할당<br />
                  sudo dd if=/dev/zero of=/swapfile bs=128M count=16<br />
                  - /dev/zero : 데이터 스토리지 초기화 문자 스트림을 제공하는
                  유닉스 계열 운영체제의 특수 파일<br />
                  - bs=128M * count=16 으로 총 2GB로 swapfile 크기를 설정
                </v-card-item>
                <v-card-item>
                  # swapfile 권한 세팅 (READ, WRITE)<br />
                  sudo chmod 600 /swapfile
                </v-card-item>
                <v-card-item>
                  # swap 공간 생성 (Make swap)<br />
                  sudo mkswap /swapfile
                </v-card-item>
                <v-card-item>
                  # swap 공간에 swapfile 추가하여 즉시 사용할 수 있도록<br />
                  sudo swapon /swapfile
                </v-card-item>
                <v-card-item>
                  # /etc/fstab vi 에디터 열기<br />
                  sudo vi /etc/fstab<br />
                  - 파일의 맨 끝 다음줄에 아래 명령어 작성<br />
                  /swapfile swap swap defaults 0 0<br />
                  - etc/fstab는 파일시스템 정보를 저장하는 곳으로 파티션 변경 및
                  디스크 추가 시에는 이 파일에 등록해야 자동으로 마운트가
                  가능<br />
                </v-card-item>
                <v-card-item>
                  #free 명령어로 ec2 메모리 상태<br />
                  free -h
                </v-card-item>
              </v-card>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              EC2 인스턴스에 AMI Nginx 설치
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-card>
                <v-card-item>
                  #설치<br />
                  sudo install nginx
                </v-card-item>
                <v-card-item>
                  #버전확인<br />
                  nginx -v
                </v-card-item>
                <v-card-item>
                  #nginx 시작<br />
                  sudo systemctl start nginx
                </v-card-item>
                <v-card-item>
                  #nginx 종료<br />
                  sudo systemctl stop nginx
                </v-card-item>
                <v-card-item>
                  http://ec2인스턴스탄력IP 접속<br />
                  => Welcome to nginx!
                </v-card-item>
                <v-card-item>
                  젠킨스 서버 설정<br />
                  /etc/nginx/conf.d/default.conf 생성하여 아래 내용 입력<br />
                  - default 파일명은 다른 이름으로 하여도 무관함
                  <v-card-text :class="cmdCls">
                    <pre>
server {
  listen 80 default_server;
  listen [::]:80 default_server;

  root /var/lib/jenkins/workspace/{생성한 Jenkins Item 이름}/dist; 
  index index.html index.htm;
  server_name _;

  location / {
    try_files $uri $uri/ /index.html;
  }
}                    
                  </pre
                    >
                  </v-card-text>
                </v-card-item>
              </v-card>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
      <v-card :class="dvCls">
        <v-card-item>
          참고한 사이트 <br />
          <v-card-text v-for="(item, index) in extLinkInfo" :key="index">
            <span :class="infoCls">
              {{ item.linkText }}
            </span>
            &nbsp;
            <v-btn
              border
              class="bg-light-blue-darken-4"
              prepend-icon="mdi-check"
              variant="text"
              size="x-small"
              @click="fnGoGlink(index)"
            >
              이동
            </v-btn>
            <br />
            {{ item.url }}
          </v-card-text>
        </v-card-item>
      </v-card>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
  data() {
    return {
      panel: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      infoCls: 'text-body-2 pa-1 bg-green-darken-2',
      accCls: 'text-body-2 pa-1 bg-orange-accent-4',
      dvCls: 'mt-5 mb-3',
      cmdCls: 'bg-grey-darken-4 mt-1',
      extLinkInfo: [
        {
          linkText: 'AWS 에 Jenkins와 Nginx 이용하여 vue project 올리기',
          url: 'https://zakelstorm.tistory.com/133',
        },
        {
          linkText: '젠킨스 설치(Linux)',
          url: 'https://www.jenkins.io/doc/book/installing/linux/#red-hat-centos',
        },
        {
          linkText: 'nginx 설치 및 설정',
          url: 'https://daily-life-of-bsh.tistory.com/223',
        },
        {
          linkText: 'Swap File을 이용해 EC2 메모리 부족 현상을 해결',
          url: 'https://kth990303.tistory.com/361',
        },
        {
          linkText: 'AWS EC2 도메인 연결(가비아)',
          url: 'https://sovovy.tistory.com/37',
        },
      ],
    };
  },
  methods: {
    fnGoGlink(sec: number) {
      this.$router.push({
        name: 'glink',
        query: { extUrl: this.extLinkInfo[sec].url },
      });
    },
  },
});
</script>

<style scoped></style>
