const buf = Buffer.alloc(1024);
const buf1 = Buffer.from('hii');
//While both alloc and allocUnsafe allocate a
//Buffer of the specified size in bytes, the Buffer created by alloc will be
//initialized with zeroes and the one created by allocUnsafe will be uninitialized.
console.log(buf1.toString());

buf.write('hello world');
console.log(buf.toString());
console.log(buf.length);
buf.set(buf1);
console.log(buf.toString());
