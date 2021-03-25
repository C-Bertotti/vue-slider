var app = new Vue ({
    el: '#root',
    data: {
        img: [
            'https://i.ytimg.com/vi/KfMZb31kk74/maxresdefault.jpg',
            'https://i.pinimg.com/originals/5d/05/65/5d056564b31ecd54ff21b5d62019e14b.jpg',
            'https://i.pinimg.com/originals/11/9e/41/119e41e7f25a3189a59a3007dadfea4f.jpg',
            'http://wallpapers4screen.com/Uploads/24-1-2016/15367/thumb2-red-panda-log-sleep-firefox-language.jpg'
        ],
        imgIndex: 0,

    },
    methods: {
        nextImage: function() {
            this.imgIndex++;

            if ( this.imgIndex == this.img.length ) {
                this.imgIndex = 0;
            }
        },
        prevImage: function() {
            this.imgIndex--;

            if ( this.imgIndex < 0 ) {
                this.imgIndex = this.img.length - 1;
            }
        }

    }
});