const service1 = document.getElementById('type1');
const service2 = document.getElementById('type2');
const service3 = document.getElementById('type3');
const service4 = document.getElementById('type4');
const service = [service1, service2, service3, service4];

const removeClass = () => {
    for (let i = 0; i < 4; ++i) {
        if (service[i].classList.contains('active')) {
            service[i].classList.remove('active');
        }
    }
}

for (let i = 0; i < 4; ++i) {
    service[i].addEventListener('click', () => {
        removeClass();
        service[i].classList.add('active')
    })
}

