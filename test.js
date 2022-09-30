import { createServer } from 'http';
import { readFile } from 'fs/promises';
import querystring from 'querystring'

createServer(async(req,res) => {
  try {
    const data = await readFile('./index.html');
    const postdata = '';

    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'});
    res.end(data);
    request.on('data', function (data) {
      // 3. data 이벤트가 발생할 때마다 callback을 통해 postdata 변수에 값을 저장
      postdata = postdata + data;
    });
    console.log(postdata)
    // 4. request객체에 on( ) 함수로 'end' 이벤트를 연결
    request.on('end', function () {
      // 5. end 이벤트가 발생하면(end는 한버만 발생한다) 3번에서 저장해둔 postdata 를 querystring 으로 객체화
      // 6. 객체화된 데이터를 로그로 출력
      // 7. 성공 HEADER 와 데이터를 담아서 클라이언트에 응답처리
      response.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
      response.end(postdata);
    })
  } catch (err) {
    console.error(err);
    res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'})
    res.end(err.message);
  }
})
.listen(8080, () => {
  console.log('8080번 포트에서 서버 대기 중입니다!');
})