/**
 * Created by tfn on 17-1-11.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Navigator, TouchableOpacity, ScrollView,} from 'react-native';

/* Demo首页，主要是定义一些按钮以及点击跳转 */
export default class MainPage extends Component {

    /**
     * 点击转换为Observable按钮
     */
    onChangeClick = () => {
    };

    /**
     * 点击创建Observable按钮
     */
    onCreateClick = () => {
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    RxJS测试Demo
                </Text>

                <ScrollView>
                    <Text style={styles.sectionTitle}>
                        Observable
                    </Text>

                    <TouchableOpacity style={styles.button1} onPress={this.onChangeClick}>
                        <Text style={styles.buttonText}>
                            of
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onCreateClick}>
                        <Text style={styles.buttonText}>
                            from
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onChangeClick}>
                        <Text style={styles.buttonText}>
                            interval
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onCreateClick}>
                        <Text style={styles.buttonText}>
                            timer
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onChangeClick}>
                        <Text style={styles.buttonText}>
                            create
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onCreateClick}>
                        <Text style={styles.buttonText}>
                            concat
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onChangeClick}>
                        <Text style={styles.buttonText}>
                            fromEvent
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onCreateClick}>
                        <Text style={styles.buttonText}>
                            fromPromise
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onChangeClick}>
                        <Text style={styles.buttonText}>
                            merge
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onCreateClick}>
                        <Text style={styles.buttonText}>
                            range
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onChangeClick}>
                        <Text style={styles.buttonText}>
                            repeat
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onCreateClick}>
                        <Text style={styles.buttonText}>
                            return/just
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onChangeClick}>
                        <Text style={styles.buttonText}>
                            for
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onCreateClick}>
                        <Text style={styles.buttonText}>
                            distinct
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onChangeClick}>
                        <Text style={styles.buttonText}>
                            delay
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onCreateClick}>
                        <Text style={styles.buttonText}>
                            scan
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onChangeClick}>
                        <Text style={styles.buttonText}>
                            take
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onCreateClick}>
                        <Text style={styles.buttonText}>
                            throttle
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onChangeClick}>
                        <Text style={styles.buttonText}>
                            map
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onCreateClick}>
                        <Text style={styles.buttonText}>
                            flatMap
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1} onPress={this.onChangeClick}>
                        <Text style={styles.buttonText}>
                            filter
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={this.onCreateClick}>
                        <Text style={styles.buttonText}>
                            reduce
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.sectionTitle}>
                        Observer
                    </Text>

                    <Text style={styles.sectionTitle}>
                        Subject
                    </Text>


                </ScrollView>
            </View>
        );
    }

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
    sectionTitle: {
        fontSize: 20,
        marginTop: 10,
        paddingLeft: 10,
        backgroundColor: '#a9a9a9',
    },
    button1: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        backgroundColor: '#48BBEC',
        borderWidth: 1,
        borderColor: '#F5FCFF',
    },
    button2: {
        justifyContent: 'center',
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
