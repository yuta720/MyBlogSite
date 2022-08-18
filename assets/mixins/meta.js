export default {
  data() {
    return {
      meta: {
        title: '',
        type: '',
        url: '',
        description: ''
      },
      // ベースとなるurl。自分の環境に合わせてください。
      base: 'https://blog.unyooon.com'
    };
  },
  head() {
    // 相対パスを取得。例えば'/item/1'とか
    const path = this.$route.path;

    // ここでmetaの中身を更新
    this.meta.title = this.article.title;
    this.meta.description = this.article.description;
    this.meta.type = 'article';
    this.meta.url = this.base + path;

    // ここから先でmetaタグを書いていく
    return {
      title: `UNYOOON BLOG | ${this.meta.title}`,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { name: 'twitter:title', content: this.meta.title },
        { name: 'twitter:text:title', content: this.meta.title }
      ]
    };
  }
};
