# hello-solidity

## 개발환경 세팅

실행 명령어

1. 이미지 빌드 `docker build -f Dockerfile.dev -t hello-solidity .`
2. 컨테이너 실행 `docker run -v $(pwd)/app:/usr/app --rm -it hello-solidity /bin/bash`

- OS: ubuntu:20.04
- 패키지
- build-essential vim wget curl jq nodejs yarn

# hardhat-tutorial

- `yarn init`
- `yarn add --dev hardhat`
- `npx hardhat`
