import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import EventCard from './EventCard';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    }
});

export default class EventList extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            events: []
        };
    }

    componentDidMount() {
        const events = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date)
        }));

        this.setState({ events });
    }

    render() {
        return (
            <FlatList
                style={styles.list}
                data={this.state.events}
                renderItem={({ item }) => <EventCard event={item} />}
                keyExtractor={item => item.id}
            />
        );
    }
}
