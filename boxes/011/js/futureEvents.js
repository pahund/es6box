/**
 * futureEvents.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 16 May 2015
 */
const futureEvents = (() => {
    const topics = {};

    function isRegistered(topic) {
        return topics.hasOwnProperty(topic);
    }

    function on(topic) {
        let callback,
            promise = new Promise(resolve => {
                callback = () => resolve();
            });
        topics[topic] = callback;
        return promise;
    }

    function trigger(topic) {
        if (!isRegistered(topic)) {
            return;
        }
        topics[topic]();
        delete topics[topic];
    }

    function getSize() {
        return Object.keys(topics).length;
    }

    return { on, trigger, getSize };
})();

export default futureEvents;
