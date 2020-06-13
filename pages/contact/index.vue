<template>
  <section id="contact">
    <h1 class="section-header">お問い合わせ</h1>
    <div class="contact-wrapper">
      <client-only>
        <form class="form-horizontal" name="contact" method="post" action="/contact/finish" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div class="form-group">
          <div class="col-sm-12">
            <input type="text" class="form-control" id="name" placeholder="お名前" name="name">
          </div>
          </div>
          <div class="form-group">
          <div class="col-sm-12">
            <input type="email" class="form-control" id="email" placeholder="メールアドレス" name="email">
          </div>
          </div>
          <textarea class="form-control" rows="10" placeholder="メッセージ" name="message"></textarea>
          <div data-netlify-recaptcha="true"></div>
          <button class="send-button" id="submit" type="submit" value="SEND">
            <span class="send-text">送信</span>
          </button>
          <button class="back-button" type="button" onclick="history.back()"><span>戻る</span></button>
        </form>
      </client-only>
  </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

#contact {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
  padding-bottom: 200px;
}

.section-header {
  text-align: center;
  margin: 0 auto;
  padding-top: 50px;
  margin-bottom: 50px;
  font: 30px 'Oswald', sans-serif;
  letter-spacing: 6px;
  color: #707070;
  margin-bottom: 25px;
}

.contact-wrapper {
  margin: 0 auto;
  padding-top: 20px;
  position: relative;
  max-width: 800px;
}

.form-horizontal {
  margin: 0 auto;
  max-width: 400px;
  font-weight: 400px;
}

.form-control, textarea, .send-button {
  width: 400px;
  padding: 10px;
  margin: 10px;
  color: #707070;
  letter-spacing: 1px;
}

.send-button {
  cursor: pointer;
  display: block;
  padding: 0.6em 0.88em;
  background-color: #43BFA0;
  color: #FFFFFF;
  border: none;
  border-color: none;
  box-shadow: 3px 3px 2px rgba(0,0,0,0.08);
}

.back-button {
  width: 400px;
  padding: 10px;
  margin: 10px;
  letter-spacing: 1px;
  cursor: pointer;
  display: block;
  padding: 0.6em 0.88em;
  background-position: right bottom;
  color: #020202;
  border: none;
  border-color: none;
  box-shadow: 3px 3px 2px rgba(0,0,0,0.08);
}

.send-text {
  margin-top: 10px;
  font: 300 14px 'Lato', sans-serif;
  letter-spacing: 2px;
}
</style>
