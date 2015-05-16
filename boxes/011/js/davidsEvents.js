/**
 * davidsEvents.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 16 May 2015
 * @see http://davidwalsh.name/pubsub-javascript
 */
const events = (() => {
    const topics = {},
        hOP = topics.hasOwnProperty;

    return {
        subscribe(topic, listener) {
            let index;

            if (!hOP.call(topics, topic)) {
                topics[topic] = [];
            }

            index = topics[topic].push(listener) - 1;

            return {
                remove() {
                    delete topics[topic][index];
                }
            };
        },
        publish(topic, info) {
            if (!hOP.call(topics, topic)) {
                return;
            }

            topics[topic].forEach(item => item(info !== undefined ? info : {}));
        }
    };
})();

export default events;
