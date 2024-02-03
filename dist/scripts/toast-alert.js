function e3ds_single_alert(content, options) {
  if (!window.e3ds_alert_count) {
    window.e3ds_alert_count = 1;
  }
  let toast = $("<div></div>")
    .append(content)
    .addClass("e3ds_alert-" + ++window.e3ds_alert_count);
  if (options && options.color) {
    toast.css("background-color", options.color);
  }
  $("#e3ds_alert_container").append(toast);
  if (options && options.timeout) {
    setTimeout(() => {
      e3ds_hide_alert(toast, content);
    }, options.timeout);
  } else {
    toast.on("click", () => {
      e3ds_hide_alert(toast, content);
    });
  }
}

function e3ds_hide_alert(toast, content) {
  toast.fadeOut();
  window.e3ds_alert_contents.splice(
    window.e3ds_alert_contents.indexOf(content),
    1
  );
  $("#output").text(JSON.stringify(window.e3ds_alert_contents));
}

function e3ds_alert(content, options) {
  if (!$("#e3ds_alert_container").length) {
    let container = $("<div></div>")
      .addClass("tmp-container")
      .attr("id", "e3ds_alert_container");
    $("body").append(container);
    console.log("clearing e3ds_alert_contains");
    window.e3ds_alert_contents = [];
  }
  if (window.e3ds_alert_contents.indexOf(content) > -1) {
    console.log("e3ds_alert_contents : " + "this content already exist.");
    return;
  }
  window.e3ds_alert_contents.push(content);
  e3ds_single_alert(content, options);
  $("#output").text(JSON.stringify(window.e3ds_alert_contents));
}

/** UTILITY FUNCTIONS **/
function addStyle(styleString) {
  const style = document.createElement("style");
  style.textContent = styleString;
  document.head.append(style);
}

addStyle(`
  div[class^=e3ds_alert] {
    background-color: red;
    color: white;
    padding: 1em 0.5em;
    border-radius: 0.3em;
    box-shadow: 1px 1px 3px grey;
    right: 1em;
    margin: 8px 4px;
  }
`);

addStyle(`
  .tmp-container {
    background-color: transparent;
    color: white;
    position: absolute;
    padding: 1em 0.5em;
    right: 1em;
    bottom: 0px;
    z-index: 10;
  }
`);
