import React from "react";

export default class AboutPreview extends React.Component {
  render() {
    var entry = this.props.entry;
    var intro = entry.getIn(["data", "intro"]);
    var about = entry.getIn(["data", "about"]);
    var classes = entry.getIn(["data", "classes"]);
    var contact = entry.getIn(["data", "contact"]);
    var bg = this.props.widgetsFor("intro").getIn(["widgets", "background"])
      .props.value;

    return h(
      "div",
      {},
      // Intro Section
      h(
        "header",
        {
          class: "masthead",
          style: {
            backgroundImage: "url(" + bg + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          },
        },
        h(
          "div",
          { class: "intro-body" },
          h(
            "div",
            { class: "container" },
            h(
              "div",
              { class: "row" },
              h(
                "div",
                { class: "col-lg-8 mx-auto" },
                h(
                  "div",
                  { class: "improve-contrast-box" },
                  h(
                    "h1",
                    { class: "brand-heading" },
                    this.props.widgetsFor("intro").getIn(["widgets", "header"])
                  ),
                  h(
                    "p",
                    { class: "intro-text" },
                    this.props.widgetsFor("intro").getIn(["widgets", "text"])
                  )
                )
              )
            )
          )
        )
      ),
      // About Section
      h(
        "section",
        { id: "about", class: "content-section text-center" },
        h(
          "div",
          { class: "container" },
          h(
            "div",
            { class: "row" },
            h(
              "div",
              { class: "col-lg-8 mx-auto" },
              h(
                "h2",
                {},
                this.props.widgetsFor("about").getIn(["widgets", "header"])
              ),
              h(
                "p",
                {},
                this.props.widgetsFor("about").getIn(["widgets", "text"])
              )
            )
          )
        )
      ),
      // Contact Section
      h(
        "section",
        { id: "contact", class: "content-section text-center" },
        h(
          "div",
          { class: "container" },
          h(
            "div",
            { class: "row" },
            h(
              "div",
              { class: "col-lg-8 mx-auto" },
              h(
                "h2",
                {},
                this.props.widgetsFor("contact").getIn(["widgets", "header"])
              ),
              h(
                "p",
                {},
                this.props.widgetsFor("contact").getIn(["widgets", "text"])
              )
            )
          )
        )
      )
    );

    return h(
      "div",
      {},
      h("h1", {}, title),
      h(
        "dl",
        {},
        h("dt", {}, "Posts on Frontpage"),
        h(
          "dd",
          {},
          this.props.widgetsFor("posts").getIn(["widgets", "front_limit"]) || 0
        ),

        h("dt", {}, "Default Author"),
        h(
          "dd",
          {},
          this.props.widgetsFor("posts").getIn(["data", "author"]) || "None"
        )
      )
    );
  }
}
