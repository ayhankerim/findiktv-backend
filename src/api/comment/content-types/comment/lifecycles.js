module.exports = {
  async afterUpdate(event) {
    const { result } = event;
    if (result.flag > 0) {
      try {
        await strapi.plugins['email'].services.email.send({
          to: 'info@findiktv.com',
          from: 'info@findiktv.com',
          subject: 'Yoruma Şikayet Geldi! ',
          text: 'Yoruma Şikayet Geldi!',
          html: 'Merhaba,<br><a href="https://panel.findiktv.com/yonetim/content-manager/collectionType/api::comment.comment/' + result.id + '">Bu yoruma</a> şikayet gelmiştir.<br> Yorum:<br>' + result.content,

        })
      } catch (err) {
        console.log(err);
      }
    }
  }
}
