/**
 * simpleEvents.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 16 May 2015
 */

const events = (() => {
    const topics = {};

    function isRegistered(topic) {
        return topics.hasOwnProperty(topic);
    }

    function on(topic, callback) {
        if (!isRegistered(topic)) {
            topics[topic] = callback;
        }
    }

    function trigger(topic, data) {
        if (!isRegistered(topic)) {
            return;
        }
        topics[topic](data);
        delete topics[topic];
    }

    function getSize() {
        return Object.keys(topics).length;
    }

    return { on, trigger, getSize };
})();

export default events;
