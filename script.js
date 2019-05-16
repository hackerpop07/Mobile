let Mobile = function (name) {
    this.name = name;
    this.battery = 70;
    this.inbox = [];
    this.outbox = [];
    this.message = '';
    this.status = true;
    this.checkStatus = function () {
        if (this.status) {
            console.log("Điện thoại " + name + " đang bật");
        } else {
            console.log("Điện thoại " + name + " đang tắt");
        }
    };
    this.turnOn = function () {
        this.status = true;
    };
    this.turnOff = function () {
        this.status = false;
    };
    this.getBattery = function () {
        if (this.battery < 100) {
            this.battery++;
        }
        return this.battery;
    };
    this.setMessage = function (msg) {
        this.message = msg;
    };
    this.sendMessage = function (phone) {
        phone.inbox.push(this.message);
        this.outbox.push(this.message);
        this.battery = this.battery - 1;
    };
    this.getInbox = function () {
        return this.inbox;
    };
    this.getOutput = function () {
        return this.outbox;
    };
    this.onOffMobile = onOffMobile;
    this.sacPinMobile = sacPinMobile;
    this.sendMobile = sendMobile;

    function onOffMobile(mobile) {
        if (mobile.status) {
            document.getElementById("onOff" + mobile.name).value = "Off";
            mobile.turnOff();
            mobile.checkStatus();
        } else {
            document.getElementById("onOff" + mobile.name).value = "On";
            mobile.turnOn();
            mobile.checkStatus();
        }

    }

    function sendMobile(mobile, phone) {
        mobile.setMessage(document.getElementById("msg" + mobile.name).value);
        if (mobile.status == true) {
            if (mobile.battery > 0) {
                mobile.sendMessage(phone);
            } else {
                alert("Máy hết pin, cần sạc gấp");
                mobile.turnOff();
                mobile.checkStatus(); //check pin nokia

            }
        }
        document.getElementById("inbox" + phone.name).value = phone.getInbox();
        document.getElementById("outbox" + mobile.name).value = mobile.getOutput();
        document.getElementById("msg" + mobile.name).value = "";
        document.getElementById("battery" + mobile.name).innerHTML = mobile.battery; //hien thi pin

    }

    function sacPinMobile(mobile) {
        let bien = setInterval(function () {
            mobile.getBattery();
            document.getElementById("battery" + mobile.name).innerHTML = mobile.battery;//hien thi pin Nokia
            if (mobile.battery >= 100)
                clearInterval(bien);
        }, 100);
        mobile.turnOn();
        mobile.checkStatus();

    }

    this.displayBattery = function (mobile) {
        document.getElementById("battery" + mobile.name).innerHTML = mobile.battery;
    }
};
let Nokia = new Mobile("Nokia");
let Iphone = new Mobile("Iphone");
Nokia.displayBattery(Nokia);
Iphone.displayBattery(Iphone);
// document.getElementById("batteryNokia").innerHTML = Nokia.battery;
// document.getElementById("batteryIphone").innerHTML = Iphone.battery;
Nokia.checkStatus();
Iphone.checkStatus();

function onOffNokia() {
    Nokia.onOffMobile(Nokia);
}

function sendNokia() {
    Nokia.sendMobile(Nokia, Iphone);
}

function sacPinNokia() {
    Nokia.sacPinMobile(Nokia);
}

function onOffIphone() {
    Iphone.onOffMobile(Iphone);
}

function sendIphone() {
    Iphone.sendMobile(Iphone, Nokia);
}

function sacPinIphone() {
    Iphone.sacPinMobile(Iphone);
}

// function onOffNokia() {
//     if (Nokia.status) {
//         document.getElementById("onOffNokia").value = "Off";
//         Nokia.turnOff();
//         Nokia.checkStatus();
//     } else {
//         document.getElementById("onOffNokia").value = "On";
//         Nokia.turnOn();
//         Nokia.checkStatus();
//     }
//
// }
//
// function onOffIphone() {
//     if (Iphone.status) {
//         document.getElementById("onOffIphone").value = "Off";
//         Iphone.turnOff();
//         Iphone.checkStatus();
//
//     } else {
//         document.getElementById("onOffIphone").value = "On";
//         Iphone.turnOn();
//         Iphone.checkStatus();
//     }
//
// }

// function sendNokia() {
//     Nokia.setMessage(document.getElementById("msgNokia").value);
//     if (Nokia.status == true) {
//         if (Nokia.battery > 0) {
//             Nokia.sendMessage(Iphone);
//         } else {
//             alert("Máy hết pin, cần sạc gấp");
//             Nokia.turnOff();
//             Nokia.checkStatus(); //check pin nokia
//
//         }
//     }
//     document.getElementById("inboxIphone").value = Iphone.getInbox();
//     document.getElementById("outboxNokia").value = Nokia.getOutput();
//     document.getElementById("msgNokia").value = "";
//     document.getElementById("batteryNokia").innerHTML = Nokia.battery; //hien thi pin
//
// }
//
// function sendIphone() {
//     Iphone.setMessage(document.getElementById("msgIphone").value);
//     if (Iphone.status == true) {
//         if (Iphone.battery > 0) {
//             Iphone.sendMessage(Nokia);
//         } else {
//             alert("Máy hết pin, cần sạc gấp");
//             Iphone.turnOff();
//             Iphone.checkStatus(); //check pin Iphone
//         }
//     }
//     document.getElementById("inboxNokia").value = Nokia.getInbox();
//     document.getElementById("outboxIphone").value = Iphone.getOutput();
//     document.getElementById("msgIphone").value = "";
//     document.getElementById("batteryIphone").innerHTML = Iphone.battery; //hien thi pin
//     Iphone.checkStatus(); //check pin Iphone
// }

// function sacPinNokia() {
//     setInterval(function () {
//         Nokia.getBattery();
//         document.getElementById("batteryNokia").innerHTML = Nokia.battery;//hien thi pin Nokia
//     }, 100);
//     Nokia.turnOn();
//     Nokia.checkStatus();
//
// }
//
// function sacPinIphone() {
//     if (Iphone.battery < 100) {
//         setInterval(function () {
//             Iphone.getBattery();
//             document.getElementById("batteryIphone").innerHTML = Iphone.battery; //hien thi pin Iphone
//         }, 100);
//     }
//     Iphone.turnOn();
//     Iphone.checkStatus();
//
// }
