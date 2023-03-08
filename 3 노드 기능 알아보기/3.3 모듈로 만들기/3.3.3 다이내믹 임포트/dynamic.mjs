const a = true;
if (a) {
  const m1 = await import('../3.3.2 ECMAScript 모듈/func.mjs');
  console.log(m1);
  const m2 = await import('../3.3.2 ECMAScript 모듈/var.mjs');
  console.log(m2);
}