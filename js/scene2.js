
const messageGirl = document.querySelector('.message-girl');
const messageSanta = document.querySelector('.message-santa');
const soundMessage = document.querySelector('.sound-message');
const btnSkip = document.querySelector('.container__btn-skip');
let interval, timeoutMessage, timeoutMessagesound;
const messageSantaText = [
    'Chào cô bé, con đang buồn vì điều gì ?',
    'Ôi, thật là đáng thương',
    'Ta sẽ tặng con môt món quà',
    'Con hãy nhắm mắt lại'
]
const messageGirlText = [
    'Dạ con đang buồn vì cô đơn ạ',
    'Hic hic...',
    'Món quà gì thế ạ ?',
    'Vâng ạ'
]
const app = {
    person: false, // false là ông già noel, true là cô gái
    countSanta: 0,
    countGirl: 0,
    showMessage(messageLog, content) {
        messageLog.innerText = content;
        messageLog.style =  `opacity: 1`;
        soundMessage.play();
        timeoutMessagesound = setTimeout(() => {
            soundMessage.currentTime = 0;
            soundMessage.pause();
        }, 1000);
        timeoutMessage = setTimeout(() => {
            messageLog.style = `opacity: 0`;
        }, 4000);
    },
    handleEvent() {
        const _this = this;
        btnSkip.onclick = e => {
            clearTimeout(timeoutMessage);
            clearTimeout(timeoutMessagesound);
            messageSanta.style = `opacity: 0`;
            messageGirl.style = `opacity: 0`;
            if(_this.person) {
                _this.showMessage(messageGirl, messageGirlText[_this.countGirl]);
                _this.countGirl++;
                _this.person = !_this.person;
            }else {
                if(_this.countSanta == messageSantaText.length) {
                    setTimeout(() => {
                        document.querySelector('.modal-gift').style = `display: block`;
                        document.querySelector('.sound-correct').play();
                    }, 1000)
                    setTimeout(()=> {
                        document.querySelector('.sound-correct').pause();
                    }, 2500)
                    setTimeout(()=> {
                        document.getElementById('link').click();
                    }, 4000)
                    
                }else {
                    _this.showMessage(messageSanta, messageSantaText[_this.countSanta]);
                }
                _this.countSanta++;
                _this.person = !_this.person;
            }
        }
    },
    start() {
        this.handleEvent();
    }
}
app.start();