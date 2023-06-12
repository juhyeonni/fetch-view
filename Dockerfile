# 현재 디렉토리를 가져와서 nginx로 호스팅하는 이미지 작성
FROM nginx:1.15.2-alpine
COPY . /usr/share/nginx/html