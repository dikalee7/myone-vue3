  

### AWS EC2에 Jenkins 설치 및 Vuejs 배포 과정
***
>AWS <U>EC2 "Linux t2.micro"</U> 인스턴스 생성

```

- 프리티어가 적용되는 Linux t2.micro 유형으로 생성
- 인스턴스 보안그룹에 젠킨스를 위한 인바운드 규칙 8080 포트 추가
- 학습을 위한 설정이므로 개방범위는 0.0.0.0/0으로 설정함

참고
- 인스턴스 재기동 시 IP 변경되는 것 확인되어 고정IP 부여를 위해 탄력적IP 할당하여 인스턴스에 연결함

```

>EC2 인스턴스에 JAVA 설치

```

Jenkins 설치를 위해 JAVA 설치(11버전)

설치가능 자바확인  
 sudo yum list | grep java-11

설치  
 sudo yum install -y java-11-amazon-corretto-devel.x86_64

참고
 - java8 설치하여 진행하였으나 젠킨스 설치 후 실행 오류 발생

```

>EC2 인스턴스에 Jenkins 설치

* [젠킨스 설치(Linux)](https://www.jenkins.io/doc/book/installing/linux/#red-hat-centos)

>EC2 인스턴스에 Git 설치

```

#Perform a quick update on your instance
sudo yum update -y

#Install git in your EC2 instance
sudo yum install git -y

#Check git version
git version

```

  >Github webhook 설정

```

배포할 GitHub Repository

- Settings > Webhooks > Add webhook
  => Payload URL http://젠킨스IP:포트/github-webhook/
  => Content type application/json
  => Just the push event 선택
  => Active체크

참고
- Jenkins에서 Github 연결시 Personal access token 필요

```

>Github Personal access tokens

```

- GitHub 접속
- 개인 프로필 > Settings > Developer settings
- Personal access tokens > Generate new token
  => Select scopes : repo, admin:repo_hook 선택

```

>Jenkins Github 연결 및 item 생성

```

배포할 VueJS 젠킨스 빌드를 위하여 NodeJS 관련 설정
- Jenkins 관리 > Plugins [NodeJs 플러그인] 설치
- Jenkins 관리 > Tools [Add NodeJS]


GitHub와 연결을 위한 Credentials 추가
- Jenkins 관리 > Manage Credentials > Add Credentials
- GitHub에서 생성한 Personal access tokens을 비밀번호로 적용함

Jenkins Item 생성
- Freestyle Project로 생성
- 소스코드관리는 Git
  => Git Repository 및 배포 브랜치 설정
- 빌드 유발 항목 중 GitHub hook trigger for GITScm polling 체크
- 빌드 환경 항목 중 Provide Node & npm bin/ folder to Path 체크
  => 설치한 NodeJs 플러그인 선택
- Build Steps(Excute shell)
cd /var/lib/jenkins/workspace/{생성한 Jenkins Item 이름}
npm install
npm run build

참고
- t2.micro 인스턴스 유형 메모리 1GB
- 젠킨스 배포 수행결과 EC2 멈춤 현상 발생하여 Swap 메모리 설정하여 메모리 부족 현상 해결

```

>스왑 파일을 이용한 스왑 공간 할당

```

# swapfile 메모리를 할당
sudo dd if=/dev/zero of=/swapfile bs=128M count=16
  - /dev/zero : 데이터 스토리지 초기화 문자 스트림을 제공하는 유닉스 계열 운영체제의 특수 파일
  - bs=128M * count=16 으로 총 2GB로 swapfile 크기를 설정

# swapfile 권한 세팅 (READ, WRITE)
sudo chmod 600 /swapfile

# swap 공간 생성 (Make swap)
sudo mkswap /swapfile

# swap 공간에 swapfile 추가하여 즉시 사용할 수 있도록
sudo swapon /swapfile

# /etc/fstab vi 에디터 열기
sudo vi /etc/fstab
  - 파일의 맨 끝 다음줄에 아래 명령어 작성
    /swapfile swap swap defaults 0 0
  - etc/fstab는 파일시스템 정보를 저장하는 곳으로 파티션 변경 및 디스크 추가 시에는 이 파일에 등록해야 자동으로 마운트가 가능

#free 명령어로 ec2 메모리 상태
free -h

```

>AWS 서버에 AMI Nginx 설치

```

- 설치
sudo install nginx

- 버전확인
nginx -v

- nginx 시작
sudo systemctl start nginx

- nginx 종료
sudo systemctl stop nginx

- http://ec2인스턴스탄력IP 접속
  => Welcome to nginx!

- 젠킨스 서버 설정
/etc/nginx/conf.d/default.conf 생성하여 아래 내용 입력
  => default 파일명은 다른 이름으로 하여도 무관함

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

```

>참고

- [AWS 에 Jenkins와 Nginx 이용하여 vue project 올리기](https://zakelstorm.tistory.com/133)
- [nginx 설치 및 설정](https://daily-life-of-bsh.tistory.com/223)
- [Swap File을 이용해 EC2 메모리 부족 현상을 해결](https://kth990303.tistory.com/361)
- [AWS EC2 도메인 연결(가비아)](https://sovovy.tistory.com/37)