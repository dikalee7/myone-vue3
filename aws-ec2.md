
#개인학습용 
### AWS EC2에 Jenkins 설치 및 Vuejs 배포 과정 
***

>AWS <U>EC2 "Linux t2.micro"</U> 인스턴스 생성
* 인스턴스 보안그룹에 젠킨스를 위한 인바운드 규칙 8080 포트 추가
* 학습을 위한 설정이므로 개방범위는 0.0.0.0/0으로 설정함 

>EC2 인스턴스에 JAVA 설치 
* Jenkins 설치를 위해 JAVA 설치(11버)
`확인`  sudo yum list | grep java-11
`설치`  sudo yum install -y java-11-amazon-corretto-devel.x86_64

>EC2 인스턴스에 Jenkins 설치
* [젠킨스 설치(Linux)](https://www.jenkins.io/doc/book/installing/linux/#red-hat-centos)

>EC2 인스턴스에 Git 설치

\#Perform a quick update on your instance 
sudo yum update -y

\#Install git in your EC2 instance
sudo yum install git -y

\#Check git version
git version

>Jenkins Github 연결 및 item 생성 (git credential, item 생성)
* Jenkins 관리 > Plugins `NodeJs 플러그인` 설치
* Jenkins 관리 > Tools `Add NodeJS` 
* Jenkins 관리 > Manage Credentials > Add Credentials
   \- GitHub에서 Personal access tokens을 생성하여 비밀번호로 적용함
* Jenkins Item 생

>Github webhook 설정


#참고사이트
[AWS 에 Jenkins와 Nginx 이용하여 vue project 올리기 :: 코딩하는 폴제트 (tistory.com)](https://zakelstorm.tistory.com/133)


