let Mobile = function (name) {
    this.name = name;
    this.battery = 100;
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
            this.battery += 100;
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
};
let Nokia = new Mobile("Nokia");
let Iphone = new Mobile("Iphone");
document.getElementById("batteryNokia").innerHTML = Nokia.battery;
document.getElementById("batteryIphone").innerHTML = Iphone.battery;
Nokia.checkStatus();
Iphone.checkStatus();

function onOffNokia() {
    if (Nokia.status) {
        document.getElementById("onOffNokia").value = "Off";
        Nokia.turnOff();
        Nokia.checkStatus();
    } else {
        document.getElementById("onOffNokia").value = "On";
        Nokia.turnOn();
        Nokia.checkStatus();
    }

}

function onOffIphone() {
    if (Iphone.status) {
        document.getElementById("onOffIphone").value = "Off";
        Iphone.turnOff();
        Iphone.checkStatus();

    } else {
        document.getElementById("onOffIphone").value = "On";
        Iphone.turnOn();
        Iphone.checkStatus();
    }

}

function sendNokia() {
    Nokia.setMessage(document.getElementById("msgNokia").value);
    if (Nokia.status == true) {
        if (Nokia.battery > 0) {
            Nokia.sendMessage(Iphone);
        } else {
            alert("Máy hết pin, cần sạc gấp");
            Nokia.turnOff();
            Nokia.checkStatus(); //check pin nokia

        }
    }
    document.getElementById("inboxIphone").value = Iphone.getInbox();
    document.getElementById("outboxNokia").value = Nokia.getOutput();
    document.getElementById("msgNokia").value = "";
    document.getElementById("batteryNokia").innerHTML = Nokia.battery; //hien thi pin

}

function sendIphone() {
    Iphone.setMessage(document.getElementById("msgIphone").value);
    if (Iphone.status == true) {
        if (Iphone.battery > 0) {
            Iphone.sendMessage(Nokia);
        } else {
            alert("Máy hết pin, cần sạc gấp");
            Iphone.turnOff();
            Iphone.checkStatus(); //check pin Iphone
        }
    }
    document.getElementById("inboxNokia").value = Nokia.getInbox();
    document.getElementById("outboxIphone").value = Iphone.getOutput();
    document.getElementById("msgIphone").value = "";
    document.getElementById("batteryIphone").innerHTML = Iphone.battery; //hien thi pin
    Iphone.checkStatus(); //check pin Iphone
}

function sacPinNokia() {
    if (Nokia.battery == 0) {
        Nokia.getBattery();

    }
    Nokia.turnOn();
    Nokia.checkStatus();
    document.getElementById("batteryNokia").innerHTML = Nokia.battery; //hien thi pin Nokia
}

function sacPinIphone() {
    if (Iphone.battery == 0) {
        Iphone.getBattery();
    }
    Iphone.turnOn();
    Iphone.checkStatus();
    document.getElementById("batteryIphone").innerHTML = Iphone.battery; //hien thi pin Iphone
}
