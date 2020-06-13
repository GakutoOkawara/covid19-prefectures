<template>
  <section id="contact">
    <h1 class="section-header">お問い合わせ</h1>
    <div class="contact-wrapper">

    <form class="form-horizontal" name="" role="form" method="post" action="contact.php">

      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="お名前" name="name" value="">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="メールアドレス" name="email" value="">
        </div>
      </div>
      <textarea class="form-control" rows="10" placeholder="メッセージ" name="message"></textarea>
      <button class="send-button" id="submit" type="submit" value="SEND">
          <span class="send-text">送信</span>
      </button>
      <button class="back-button" type="button" onclick="history.back()"><span>戻る</span></button>

    </form>
  </div>
  </section>
</template>

<style scoped>
@import '@/assets/css/contact.css';
</style>
