# hello-solidity

## 개발환경 세팅

실행 명령어

1. 이미지 빌드 `docker build -f Dockerfile.dev -t hello-solidity .`
2. 컨테이너 실행 `docker run -v $(pwd):/usr/app --rm -it hello-solidity /bin/bash`
   1. 차후에 포트 연결 필요할 때 `-p`
   2. `docker run -v $(pwd):/usr/app --rm -it -p 3000:3000 -p 8545:8545 hello-solidity /bin/bash`
3. 컨테이너 접속 `docker exec -it [id] /bin/bash`

- OS: ubuntu:20.04
- 패키지
- build-essential vim wget curl jq nodejs yarn

- jq는 뺼까 고민

---

# [hardhat-tutorial](https://hardhat.org/tutorial)

- `yarn init`
- `yarn add --dev hardhat`
- `npx hardhat`
- `npx hardhat compile`
