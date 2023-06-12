export async function testFreeImageHost() {
  const API_KEY = '6d207e02198a847aa98d0a2a901485a5';

  const res = await fetch('https://freeimage.host/api/1/upload', {
    method: 'POST',
    body: JSON.stringify({
      key: API_KEY,
      action: 'upload',
      source: postUploadImg.files[0],
      format: 'json',
    }),
  });
  console.log(res);
}
