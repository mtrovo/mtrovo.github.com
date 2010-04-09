Interval = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    millis: 0
    };
Interval.fromMillis = function(millis){
    var ret = new Interval();
    ret.millis = millis % 1000;
    millis = trunc(millis / 1000);
    
    if(millis == 0) return ret;
    ret.seconds = millis % 60;
    millis = trunc(millis / 60);
    
    if(millis == 0) return ret;
    ret.minutes = millis % 60;
    millis = trunc(millis / 60);
    
    if(millis == 0) return ret;
    ret.hours = millis % 24;
    millis = trunc(millis / 24);
    
    if(millis == 0) return ret;
    ret.days = millis % 30;
    millis = trunc(millis / 30);
    
    if(millis == 0) return ret;
    ret.months = millis % 12;
    ret.years = trunc(millis / 12);
    
    
    return ret;
}

Date.prototype.interval = function(date){
    var millis = this - date;
    return Interval.fromMillis(millis);
}