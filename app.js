/**
 * classnames available
 * @constant
 * @type {String[]}
 */
const CLASSES = ["user1", "user2"];

/**
 * default color
 * @constant
 * @type {String}
 * @default
 */
const DEFAULT_COLOR = "#8ddba4";

// create Vue app
const app = Vue.createApp({
  data() {
    return {
      className: "",
      visible: true,
      color: DEFAULT_COLOR,
    };
  },
  computed: {
    classname() {
      const className = this.className;
      const classes = [this.visible ? "visible" : "hidden"];

      if (!CLASSES.includes(className)) {
        return classes;
      }

      return [...classes, className];
    },
  },
  methods: {
    toogleVisible() {
      this.visible = !this.visible;
    },
  },
});

// mount app
app.mount("#assignment");
