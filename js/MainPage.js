/**
 * Created by tfn on 17-1-11.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView,} from 'react-native';
import Rx from 'rxjs/Rx';

/* Demo首页，主要是定义一些按钮以及点击跳转 */
export default class MainPage extends Component {

    /**
     * 点击Observable的of按钮
     */
    onOfClick = () => {
        console.log('of函数');
        Rx.Observable.of(1, 3, 'foo').subscribe((x) => {
            console.log('=> onNext : ' + x);
        }, (e) => {
            console.log('=> onError : ' + e);
        }, () => {
            console.log('=> onComplete ');
        });
    };

    /**
     * 点击Observable的from按钮
     */
    onFromClick = () => {
        console.log('from函数');
        Rx.Observable.from([1, 3, 'foo']).subscribe((x) => {
            console.log('=> onNext : ' + x);
        }, (e) => {
            console.log('=> onError : ' + e);
        }, () => {
            console.log('=> onComplete ');
        });
    };

    /**
     * 点击Observable的interval按钮
     */
    onIntervalClick = () => {
        console.log('interval函数');
        Rx.Observable.interval(300).take(4).subscribe((x) => {
            console.log('=> onNext : ' + x);
        }, (e) => {
            console.log('=> onError : ' + e);
        }, () => {
            console.log('=> onComplete ');
        });
    };

    /**
     * 点击Observable的timer按钮
     */
    onTimerClick = () => {
        console.log('timer函数');
        Rx.Observable.timer(500, 200).take(4).subscribe((x) => {
            console.log('=> onNext : ' + x);
        }, (e) => {
            console.log('=> onError : ' + e);
        }, () => {
            console.log('=> onComplete ');
        });
    };

    /**
     * 点击Observable的create按钮
     */
    onCreateClick = () => {
        console.log('create函数');
        Rx.Observable.create(function subscribe(observer) {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            setTimeout(() => {
                observer.next(4);
                observer.complete();
            }, 1000);
        }).subscribe((x) => {
            console.log('=> onNext : ' + x);
        }, (e) => {
            console.log('=> onError : ' + e);
        }, () => {
            console.log('=> onComplete ');
        });
    };

    /**
     * 点击Observable的concat按钮
     */
    onConcatClick = () => {
        console.log('concat函数');
        let observable1 = Rx.Observable.of(3);
        let observable2 = Rx.Observable.of(6);

        Rx.Observable.concat(observable1, observable2).subscribe((x) => {
            console.log('=> onNext : ' + x);
        }, (e) => {
            console.log('=> onError : ' + e);
        }, () => {
            console.log('=> onComplete ');
        });
    };

    /**
     * 点击Observable的fromEvent按钮
     */
    onFromEventClick = () => {
        console.log('fromEvent函数');
        let text = this.refs.eventText;
        alert(text.style);
        let btn = this.refs.testBtn;
        // if(btn){
        //     alert('获取到了对象：' + btn.value );
        // }else{
        //     alert('没有获取到对象');
        // }
        let ob = Rx.Observable.fromEvent(this.refs.testBtn, 'click');
        // if (ob) {
        //     alert('获取到了对象：' + ob);
        // } else {
        //     alert('没有获取到对象');
        // }
        // ob.subscribe((x) => {
        //     console.log('=> onNext : ' + x);
        // }, (e) => np{
        //     console.log('=> onError : ' + e);
        // }, () => {
        //     console.log('=> onComplete ');
        // });
        // alert('该方法在RN中还不知道如何使用');
    };

    /**
     * 点击Observable的fromPromise按钮
     */
    onFromPromiseClick = () => {
        console.log('fromPromise函数');
        let promise = new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(50);
            }, 1000);
        });

        Rx.Observable.fromPromise(promise).subscribe((x) => {
            console.log('=> onNext : ' + x);
        }, (e) => {
            console.log('=> onError : ' + e);
        }, () => {
            console.log('=> onComplete ');
        });
    };

    /**
     * 点击Observable的merge按钮
     */
    onMergeClick = () => {
        console.log('merge函数');

        //timeInterval方法获取一个新对象，对象包括两个属性，value属性是值，interval属性是距离上一个对象之间的时间间隔，单位为ms
        //pluck方法获取对应key的值
        let observable1 = Rx.Observable.interval(100).timeInterval().pluck('interval');
        let observable2 = Rx.Observable.interval(150).timeInterval().pluck('interval');
        Rx.Observable.merge(observable1, observable2).take(10).subscribe((x) => {
            console.log('=> onNext : ' + x);
        }, (e) => {
            console.log('=> onError : ' + e);
        }, () => {
            console.log('=> onComplete ');
        });
    };

    /**
     * 点击Observable的range按钮
     */
    onRangeClick = () => {
        console.log('range函数');
        Rx.Observable.range(5, 8).subscribe((x) => {
            console.log('=> onNext : ' + x);
        }, (e) => {
            console.log('=> onError : ' + e);
        }, () => {
            console.log('=> onComplete ');
        });
    };

    /**
     * 点击Observable的repeat按钮
     */
    onRepeatClick = () => {
        console.log('repeat函数');
        Rx.Observable.of(1, 2, 3).repeat(2).subscribe((x) => {
            console.log('=> onNext : ' + x);
        }, (e) => {
            console.log('=> onError : ' + e);
        }, () => {
            console.log('=> onComplete ');
        });
    };

    /**
     * 点击Observable的return/just按钮
     */
    onReturnClick = () => {
        // console.log('return/just函数');
        // Rx.Observable.just(500).subscribe((x) => {
        //     console.log('=> onNext : ' + x);
        // }, (e) => {
        //     console.log('=> onError : ' + e);
        // }, () => {
        //     console.log('=> onComplete ');
        // });
        alert('该方法在RN中无法使用');
    };

    /**
     * 点击Observable的for按钮
     */
    onForClick = () => {
        // console.log('for函数');
        // let array = [1, 2, 3];
        //
        // Rx.Observable.for(array, (x) => {
        //     return Rx.Observable.of(x);
        // }).subscribe((x) => {
        //     console.log('=> onNext : ' + x);
        // }, (e) => {
        //     console.log('=> onError : ' + e);
        // }, () => {
        //     console.log('=> onComplete ');
        // });
        alert('该方法在RN中无法使用');
    };

    /**
     * 点击Observable的distinct按钮
     */
    onDistinctClick = () => {
        console.log('distinct函数');

        let array = [1, 2, 4, 5, 6, 7, 77, 46, 5, 4, 234, 4, 5, 6, 5, 33, 44, 4, 2, 3, 3, 4, 4, 4, 6, 6, 6, 3, 4, 24,
            654736, 7];

        Rx.Observable.from(array).distinct().subscribe((x) => {
            console.log('=> onNext : ' + x);
        }, (e) => {
            console.log('=> onError : ' + e);
        }, () => {
            console.log('=> onComplete ');
        });
    };

    /**
     * 点击Observable的delay按钮
     */
    onDelayClick = () => {
        console.log('delay函数');
        Rx.Observable.of(500, 200).delay(1000).subscribe((x) => {
            console.log('=> onNext : ' + x);
        }, (e) => {
            console.log('=> onError : ' + e);
        }, () => {
            console.log('=> onComplete ');
        });
    };

    /**
     * 点击Observable的scan按钮
     */
    onScanClick = () => {
        console.log('scan函数');
        Rx.Observable.of(3, 5, 12, 50, 500, 200).scan((total, cur, i) => {
            return total + cur + i;
        }, 6).subscribe((x) => {
            console.log('=> onNext : ' + x);
        }, (e) => {
            console.log('=> onError : ' + e);
        }, () => {
            console.log('=> onComplete ');
        });
    };

    /**
     * 点击Observable的take按钮
     */
    onTakeClick = () => {
        console.log('take函数');
        Rx.Observable.timer(500, 200).take(4).subscribe((x) => {
            console.log('=> onNext : ' + x);
        }, (e) => {
            console.log('=> onError : ' + e);
        }, () => {
            console.log('=> onComplete ');
        });
    };

    /**
     * 点击Observable的throttle按钮
     */
    onThrottleClick = () => {
        alert('该方法在RN中还不知道如何使用');
    };

    /**
     * 点击Observable的map按钮
     */
    onMapClick = () => {
        console.log('map函数');
        Rx.Observable.of(500, 200, 'a').map((x, i) => {
            return x += i;
        }).subscribe((x) => {
            console.log('=> onNext : ' + x);
        }, (e) => {
            console.log('=> onError : ' + e);
        }, () => {
            console.log('=> onComplete ');
        });
    };

    /**
     * 点击Observable的flatMap按钮
     */
    onFlatMapClick = () => {
        console.log('flatMap函数');
        Rx.Observable.of(500, 200, 5).flatMap((x, i) => {
            return Rx.Observable.range(x, 2 * i + 1);
        }).subscribe((x) => {
            console.log('=> onNext : ' + x);
        }, (e) => {
            console.log('=> onError : ' + e);
        }, () => {
            console.log('=> onComplete ');
        });
    };

    /**
     * 点击Observable的filter按钮
     */
    onFilterClick = () => {
        console.log('filter函数');
        Rx.Observable.of(1, 2, 4, 5, 6, 7, 354, 3, 423, 235, 35, 45, 2, 3, 43, 4, 324, 3, 43, 43, 200)
            .filter((x, i) => x % 2 === 1).subscribe((x) => {
            console.log('=> onNext : ' + x);
        }, (e) => {
            console.log('=> onError : ' + e);
        }, () => {
            console.log('=> onComplete ');
        });
    };

    /**
     * 点击Observable的reduce按钮
     */
    onReduceClick = () => {
        console.log('reduce函数');
        Rx.Observable.of(500, 1, 4, 54, 200).reduce((total, cur) => total + cur).subscribe((x) => {
            console.log('=> onNext : ' + x);
        }, (e) => {
            console.log('=> onError : ' + e);
        }, () => {
            console.log('=> onComplete ');
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    RxJS测试Demo
                </Text>

                <Text style={styles.subTitle}>
                    （Android可在终端的项目根目录下通过react-native log-android命令查看各个按钮点击对应的日志）
                </Text>

                <ScrollView>
                    <Text style={styles.sectionTitle}>
                        Observable
                    </Text>

                    <TouchableOpacity style={styles.button1} onPress={this.onOfClick}>
                        <Text style={styles.buttonText}>
                            of
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onFromClick}>
                        <Text style={styles.buttonText}>
                            from
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onIntervalClick}>
                        <Text style={styles.buttonText}>
                            interval
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onTimerClick}>
                        <Text style={styles.buttonText}>
                            timer
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onCreateClick}>
                        <Text style={styles.buttonText}>
                            create
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onConcatClick}>
                        <Text style={styles.buttonText}>
                            concat
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity ref="testBtn" style={styles.button1} onPress={this.onFromEventClick}>
                        <Text ref="eventText" style={styles.buttonText}>
                            fromEvent
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onFromPromiseClick}>
                        <Text style={styles.buttonText}>
                            fromPromise
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onMergeClick}>
                        <Text style={styles.buttonText}>
                            merge
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onRangeClick}>
                        <Text style={styles.buttonText}>
                            range
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onRepeatClick}>
                        <Text style={styles.buttonText}>
                            repeat
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onReturnClick}>
                        <Text style={styles.buttonText}>
                            return/just
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onForClick}>
                        <Text style={styles.buttonText}>
                            for
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onDistinctClick}>
                        <Text style={styles.buttonText}>
                            distinct
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onDelayClick}>
                        <Text style={styles.buttonText}>
                            delay
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onScanClick}>
                        <Text style={styles.buttonText}>
                            scan
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onTakeClick}>
                        <Text style={styles.buttonText}>
                            take
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onThrottleClick}>
                        <Text style={styles.buttonText}>
                            throttle
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onMapClick}>
                        <Text style={styles.buttonText}>
                            map
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onFlatMapClick}>
                        <Text style={styles.buttonText}>
                            flatMap
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onFilterClick}>
                        <Text style={styles.buttonText}>
                            filter
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onReduceClick}>
                        <Text style={styles.buttonText}>
                            reduce
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.sectionTitle}>
                        Subject
                    </Text>

                    <TouchableOpacity style={styles.button1} onPress={this.onSubjectClick}>
                        <Text style={styles.buttonText}>
                            Subject
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onAsyncSubjectClick}>
                        <Text style={styles.buttonText}>
                            AsyncSubject
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onBehaviorSubjectClick}>
                        <Text style={styles.buttonText}>
                            BehaviorSubject
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onReplaySubjectClick}>
                        <Text style={styles.buttonText}>
                            ReplaySubject
                        </Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        );
    }

    /**
     * 点击Subject的Subject按钮
     */
    onSubjectClick = () => {
        console.log('Subject方法');
        let observable = Rx.Observable.interval(500);
        let subject = new Rx.Subject();
        let multicasted = observable.multicast(subject);//订阅多个

        let subscription1 = multicasted.subscribe(
            (v) => console.log('observerA: ' + v)
        );

        let subscriptionConnect = multicasted.connect();//订阅

        let subscription2;

        setTimeout(() => {
            subscription2 = multicasted.subscribe(
                (v) => console.log('observerB: ' + v)
            );
        }, 600);

        setTimeout(() => {
            subscription1.unsubscribe();
        }, 1200);

        setTimeout(() => {
            subscription2.unsubscribe();
            subscriptionConnect.unsubscribe();
        }, 2000);
    };

    /**
     * 点击Subject的AsyncSubject按钮
     */
    onAsyncSubjectClick = () => {
        console.log('AsyncSubject方法');
        let subject = new Rx.AsyncSubject();

        subject.subscribe({
            next: (v) => console.log('observerA: ' + v)
        });

        subject.next(1);
        subject.next(2);
        subject.next(3);
        subject.next(4);

        subject.subscribe({
            next: (v) => console.log('observerB: ' + v)
        });

        subject.next(5);
        subject.complete();
    };

    /**
     * 点击Subject的BehaviorSubject按钮
     */
    onBehaviorSubjectClick = () => {
        console.log('BehaviorSubject方法');
        let subject = new Rx.BehaviorSubject(5);//5是初始值

        subject.subscribe({
            next: (v) => console.log('observerA: ' + v)
        });

        subject.next(1);
        subject.next(2);

        subject.subscribe({
            next: (v) => console.log('observerB: ' + v)
        });

        subject.next(3);
        subject.complete();
    };

    /**
     * 点击Subject的ReplaySubject按钮
     */
    onReplaySubjectClick = () => {
        console.log('ReplaySubject方法');
        var subject = new Rx.ReplaySubject(3);//3表示需要缓存的数量

        subject.subscribe({
            next: (v) => console.log('observerA: ' + v)
        });

        subject.next(1);
        subject.next(2);
        subject.next(3);
        subject.next(4);

        subject.subscribe({
            next: (v) => console.log('observerB: ' + v)
        });

        subject.next(5);
        subject.complete();

    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },
    subTitle: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        color: 'red',
        marginHorizontal: 5,
    },
    sectionTitle: {
        fontSize: 20,
        marginTop: 10,
        paddingLeft: 10,
        backgroundColor: '#a9a9a9',
    },
    button1: {
        justifyContent: 'center',
        marginLeft: 10,
        alignItems: 'center',
        height: 30,
        backgroundColor: '#48BBEC',
        borderWidth: 1,
        borderColor: '#F5FCFF',
    },
    button2: {
        justifyContent: 'center',
        marginLeft: 10,
        alignItems: 'center',
        height: 30,
        backgroundColor: '#e9967a',
        borderWidth: 1,
        borderColor: '#F5FCFF',
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
    },
});
