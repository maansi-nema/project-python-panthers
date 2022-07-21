echo "lol"
#!/bin/bash
echo "0"
git fetch && git reset origin/main --hard
echo "1"
docker compose -f docker-compose.prod.yml down
echo "2"
docker compose -f docker-compose.prod.yml up -d --build
echo "3"