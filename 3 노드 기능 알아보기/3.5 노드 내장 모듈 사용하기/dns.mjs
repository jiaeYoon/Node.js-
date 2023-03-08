import dns from 'dns/promises';

const ip = await dns.lookup('gilbut.co.kr');
console.log('IP', ip);

const a = await dns.resolve('gilbut.co.kr', 'A');   // ipv4 주소
console.log('A', a);

const mx = await dns.resolve('gilbut.co.kr', 'MX');   // 메일 서버
console.log('MX', mx);

const cname = await dns.resolve('www.gilbut.co.kr', 'CNAME');   // 별칭
console.log('CNAME', cname);

const any = await dns.resolve('gilbut.co.kr', 'ANY'); 
console.log('ANY', any);