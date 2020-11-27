/*function wakeUp(wakeUpTime, callback) {
    console.log("New fantastic day is coming...");
    setTimeout(() => {
        if(wakeUpTime <= 7) {
            callback(`"It's a deep night, please, don't bother me..."`, null);
        } else {
            callback(null, `"I woke up and said 'Good morning' to my wife"`);
        }
    }, 1000);
}

function washUp(water, toothPasta, callback) {
    setTimeout(() => {
        if(!water || !toothPasta) {
            callback('"Fuck! Something went wrong again!"', null)
        } else {
            callback(null, `"I'm clean and ready go ahead"`);
        }
    }, 1500);
}

function doExercises(sick, dayOff, callback) {
    setTimeout(() => {
        if(sick || dayOff) {
            callback("Today I miss physical exercises ", null);
        } else {
            callback(null, '"I am strong as Terminator"');
        }
    }, 1000);
}

function haveBreakfast(food, coffe, tea, callback) {
    setTimeout(() => {
        if(!food) {
            callback('"Oh...It is necessary to go out"', null);
        }
        else {
            if(coffe) console.log("Making a cup of coffee");
                else if(!coffe && tea) console.log("Cup of tea is better than nothing");
                    else console.log("Keep in mind, that you need to buy components for beverages");
                    callback(null, `"Great, I'm overwhelmed by energy and enthusiasm"`);
        }
    }, 2000);
}

function studyPart1(electricity, callback) {
    setTimeout(() => {
        if(!electricity) {
            callback('"To learn on-line course without electricity - impossible"', null);
        } else {
            callback(null, `"Amigo, do the tasks everyday and you become programmer"`);
        }
    }, 1000);
}

function haveLunch(food, callback) {
    setTimeout(() => {
        if(!food) {
            callback('"Person must eat three times a day at least"', null);
        } else {
            callback(null, `"...Loading...The energy was recovered. Let's proceed study"`);
        }
    }, 500);
}

function ok10Tasks(alreadyDone, taskquantity, callback) {
    setTimeout(() => {
        if(taskquantity >= 10 || alreadyDone) {
            callback("Scope of work is out of my possibilities", null);
        } else {
            callback(null, `"My skills were enhanced"`);
        }
    }, 1000);
}

function lessonOk10(lection, practice, callback) {
    setTimeout(() => {
        if(lection) console.log("Don't forget to buy snacks");
        else if (practice) console.log('Dress up, go a walk and say "Hello" to your mentor');
        if(!lection && !practice) {
            callback("It's a weekend", null);
        } else {
            callback(null, "When a lesson ends your brain is full and you barely can think");
        }
    },1000);
}

function goHome(time, callback) {
    setTimeout(() => {
        if(time >= 10) {
            callback("It was too late, you took a taxi", null);
        } else {
            callback(null, "Commuting home with hope for a rest");
        }
    }, 500);
}

wakeUp( 8, (error, wakeUp) => {
    if (error) {
        console.log("Person mumbles: " + error);
    } else {
        console.log("First checkpoint day: " + wakeUp);
        washUp(true, true, (error, washup) => {
            if(error) {
                console.log(`Person says rudely: ` + error);
            } else {
                console.log(`Second checkpoint day: ` + washup);
                doExercises(false, false, (error, exercise) => {
                    if(error) {
                        console.log(error + "because of bad condition");
                    } else {
                        console.log("Third checkpoint day: " + exercise);
                        haveBreakfast(true, true, true, (error, good) => {
                            if(error) {
                                console.log(`Hungry voice from a stomach: ` + error);
                            } else {
                                console.log(`Fourth checkpoint day: ` + good);
                                studyPart1(true, (error, data) => {
                                    if(error) {
                                        console.log("Alert message: " + error);
                                    } else {
                                        console.log("Fifth checkpoint day: " + data);
                                        haveLunch(true, (error, data) => {
                                            if(error) {
                                                console.log("Please, stick to the recommendation: " + error);
                                            } else {
                                                console.log("Sixth checkpoint day: " + data);
                                                ok10Tasks(false, 9, (error, data) => {
                                                    if(error) {
                                                        console.log("Rely only on yourself: " + error);
                                                    } else {
                                                        console.log("Seventh checkpoint day: " + data);
                                                        lessonOk10(true, false, (error, data) => {
                                                            if(error) {
                                                                console.log("You can manage your time as you wish. " + error);
                                                            } else {
                                                                console.log("Eighth checkpoint day: " + data);
                                                                goHome(9.5, (error, data) => {
                                                                    if(error) {
                                                                        console.log("You had expensive time. " + error);
                                                                    }
                                                                    else {
                                                                        console.log("Ninth checkpoint day: " + data);
                                                                        console.log("Private time has come ;)");
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});*/

/*wakeUp(8)
    .then(valueResolveWakeUp => {
        console.log("First checkpoint day: " + valueResolveWakeUp);
        return washUp(true, true);
    })
    .then(valueResolveWashUp => {
        console.log(`Second checkpoint day: ` + valueResolveWashUp);
        return doExercises(false, false);
    })
    .then(valueResolveDoExercises => {
        console.log("Third checkpoint day: " + valueResolveDoExercises);
        return haveBreakfast(true, true, false);
    })
    .then(valueResolveHaveBreakfast => {
        console.log(`Fourth checkpoint day: ` + valueResolveHaveBreakfast);
        return studyPart1(true);
    })
    .then(valueResolveStudyPart1 => {
        console.log("Fifth checkpoint day: " + valueResolveStudyPart1);
        return haveLunch(true);
    })
    .then(valueResolveHaveLunch => {
        console.log("Sixth checkpoint day: " + valueResolveHaveLunch);
        return ok10Tasks(false, 9);
    })
    .then(valueResolveOk10Tasks => {
        console.log("Seventh checkpoint day: " + valueResolveOk10Tasks);
        return lessonOk10(true, false);
    })
    .then(valueResolveLessonOk10 => {
        console.log("Eighth checkpoint day: " + valueResolveLessonOk10);
        return goHome(9.3);
    })
    .then(valueResolveGoHome => {
        console.log("Ninth checkpoint day: " + valueResolveGoHome);
        console.log("Private time has come ;)");
    })
    .catch(reason => {
        console.log(reason);
    })
    .finally(() => {
        console.log("First program with promises was ended");
    })


function wakeUp(wakeUpTime) {
    return new Promise((resolve, reject) => {
        console.log("New fantastic day is coming...");
        setTimeout(() => {
            if(wakeUpTime <= 7) {
                reject(`"It's a deep night, please, don't bother me..."`);
            } else {
                resolve(`"I woke up and said 'Good morning' to my wife"`);
            }
        }, 1000);
    });
}

function washUp(water, toothPasta) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!water || !toothPasta) {
                reject('"Fuck! Something went wrong again!"')
            } else {
                resolve(`"I'm clean and ready go ahead"`);
            }
        }, 1500);
    });
}

function doExercises(sick, dayOff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(sick || dayOff) {
                reject("Today I miss physical exercises ");
            } else {
                resolve('"I am strong as Terminator"');
            }
        }, 1000);
    });
}

function haveBreakfast(food, coffe, tea) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!food) {
                reject('"Oh...It is necessary to go out"');
            }
            else {
                if(coffe) console.log("Making a cup of coffee");
                else if(!coffe && tea) console.log("Cup of tea is better than nothing");
                else console.log("Keep in mind, that you need to buy components for beverages");
                resolve(`"Great, I'm overwhelmed by energy and enthusiasm"`);
            }
        }, 2000);
    });
}

function studyPart1(electricity) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!electricity) {
                reject('"To learn on-line course without electricity - impossible"');
            } else {
                resolve(`"Amigo, do the tasks everyday and you become programmer"`);
            }
        }, 1000);
    });
}

function haveLunch(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!food) {
                reject('"Person must eat three times a day at least"');
            } else {
                resolve(`"...Loading...The energy was recovered. Let's proceed study"`);
            }
        }, 500);
    });
}

function ok10Tasks(alreadyDone, taskquantity) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(taskquantity >= 10 || alreadyDone) {
                reject("Scope of work is out of my possibilities");
            } else {
                resolve(`"My skills were enhanced"`);
            }
        }, 1000);
    });
}

function lessonOk10(lection, practice) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(lection) console.log("Don't forget to buy snacks");
            else if (practice) console.log('Dress up, go a walk and say "Hello" to your mentor');
            if(!lection && !practice) {
                reject("It's a weekend");
            } else {
                resolve("When a lesson ends your brain is full and you barely can think");
            }
        },1000);
    });
}

function goHome(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(time >= 10) {
                reject("It was too late, you took a taxi");
            } else {
                resolve("Commuting home with hope for a rest");
            }
        }, 500);
    });
}*/








