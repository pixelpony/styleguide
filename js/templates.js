// _sg/components/alert.dust
(function(){dust.register("_sg/components/alert",body_0);function body_0(chk,ctx){return chk.write("<div ").exists(ctx._get(false, ["class"]),ctx,{"block":body_1},null).write(" style=\"text-align: center;\">").exists(ctx._get(false, ["text"]),ctx,{"else":body_2,"block":body_3},null).write("</div>");}function body_1(chk,ctx){return chk.write("class=\"").reference(ctx._get(false, ["class"]),ctx,"h").write("\"");}function body_2(chk,ctx){return chk.write("Some message.");}function body_3(chk,ctx){return chk.reference(ctx._get(false, ["text"]),ctx,"h");}return body_0;})();
 // _sg/components/button.dust
(function(){dust.register("_sg/components/button",body_0);function body_0(chk,ctx){return chk.write("<button type=\"button\" class=\"").exists(ctx._get(false, ["class"]),ctx,{"block":body_1},null).write("\">").exists(ctx._get(false, ["label"]),ctx,{"block":body_2},null).write("</button>");}function body_1(chk,ctx){return chk.reference(ctx._get(false, ["class"]),ctx,"h");}function body_2(chk,ctx){return chk.reference(ctx._get(false, ["label"]),ctx,"h");}return body_0;})();
 // _sg/components/checkbox.dust
(function(){dust.register("_sg/components/checkbox",body_0);function body_0(chk,ctx){return chk.write("<input type=\"checkbox\" id=\"").exists(ctx._get(false, ["idp"]),ctx,{"block":body_1},null).write("\" checked />Hello, I'm a checkbox.");}function body_1(chk,ctx){return chk.reference(ctx._get(false, ["idp"]),ctx,"h");}return body_0;})();
 // _sg/components/color.dust
(function(){dust.register("_sg/components/color",body_0);function body_0(chk,ctx){return chk.write("<div class=\"color\"><div class=\"color-sample ").exists(ctx._get(false, ["light"]),ctx,{"block":body_1},null).write("\" style=\"background-color: ").reference(ctx._get(false, ["hex"]),ctx,"h").write(";\">").reference(ctx._get(false, ["hex"]),ctx,"h").write("</div><div class=\"color-name\">").reference(ctx._get(false, ["name"]),ctx,"h").write("</div></div>");}function body_1(chk,ctx){return chk.write("light");}return body_0;})();
 // _sg/components/datepicker.dust
(function(){dust.register("_sg/components/datepicker",body_0);function body_0(chk,ctx){return chk.write("<div class=\"input-group date date-field\"><input type=\"text\" name=\"endsAt\" ").section(ctx._get(false, ["endsAt"]),ctx,{"block":body_1},null).write(" placeholder=\"mm/dd/yyyy\" class=\"form-control\"><span class=\"input-group-addon\"><span class=\"icon icon-calendar\"></span></span></div>");}function body_1(chk,ctx){return chk.write("value=\"").helper("formatDate",ctx,{},{"date":body_2,"format":"MM/DD/YYYY"}).write("\"");}function body_2(chk,ctx){return chk.reference(ctx._get(true,[]),ctx,"h");}return body_0;})();
 // _sg/components/dropdown.dust
(function(){dust.register("_sg/components/dropdown",body_0);function body_0(chk,ctx){return chk.write("<select class=\"dropdown alt-dropdown\">  <option value=\"\" class=\"label\">Setting</option>  <option value=\"1\">Option 1</option>  <option value=\"2\">Option 2</option>  <option value=\"3\">Option 3</option>  <option value=\"4\">Option 4</option>  <option value=\"5\">Option 5</option>  </select>  ");}return body_0;})();
 // _sg/components/input-text-dynamic.dust
(function(){dust.register("_sg/components/input-text-dynamic",body_0);function body_0(chk,ctx){return chk.write("<div class=\"input-text\" contenteditable=\"true\" data-name=\"field-name\"\n     data-placeholder=\"Field value\" data-submit=\"/course/123-456\" />");}return body_0;})();
 // _sg/components/input-text.dust
(function(){dust.register("_sg/components/input-text",body_0);function body_0(chk,ctx){return chk.write("<input type=\"text\" ").exists(ctx._get(false, ["disabled"]),ctx,{"block":body_1},null).write(" name=\"field-name\" placeholder=\"Field value\" ").exists(ctx._get(false, ["class"]),ctx,{"block":body_2},null).write("/>");}function body_1(chk,ctx){return chk.write("disabled");}function body_2(chk,ctx){return chk.write("class=\"").reference(ctx._get(false, ["class"]),ctx,"h").write("\"");}return body_0;})();
 // _sg/components/knewcon.dust
(function(){dust.register("_sg/components/knewcon",body_0);function body_0(chk,ctx){return chk.write("<div class=\"knewcon\"><div class=\"knewcon-sample ").exists(ctx._get(false, ["knewcon"]),ctx,{"block":body_1},null).write("\"></div><div class=\"knewcon-name\">").exists(ctx._get(false, ["name"]),ctx,{"block":body_2},null).write("</div></div>");}function body_1(chk,ctx){return chk.reference(ctx._get(false, ["knewcon"]),ctx,"h");}function body_2(chk,ctx){return chk.reference(ctx._get(false, ["name"]),ctx,"h");}return body_0;})();
 // _sg/components/list.dust
(function(){dust.register("_sg/components/list",body_0);function body_0(chk,ctx){return chk.write("<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li></ul>");}return body_0;})();
 // _sg/components/page-controls.dust
(function(){dust.register("_sg/components/page-controls",body_0);function body_0(chk,ctx){return chk.write("<div class=\"page-controls\"><a href=\"#\" class=\"pager next\" style=\"visibility: visible;\">Next&nbsp;›</a><a href=\"#\" class=\"pager prev\" style=\"visibility: visible;\">‹&nbsp;Previous</a><a class=\"view-page\" href=\"").reference(ctx._get(false, ["url"]),ctx,"h").write("\">...</a><a class=\"view-page active\" href=\"").reference(ctx._get(false, ["url"]),ctx,"h").write("\">3</a><a class=\"view-page\" href=\"").reference(ctx._get(false, ["url"]),ctx,"h").write("\">4</a><a class=\"view-page\" href=\"").reference(ctx._get(false, ["url"]),ctx,"h").write("\">5</a><a class=\"view-page\" href=\"").reference(ctx._get(false, ["url"]),ctx,"h").write("\">6</a><a class=\"view-page\" href=\"").reference(ctx._get(false, ["url"]),ctx,"h").write("\">7</a><a class=\"view-page\" href=\"").reference(ctx._get(false, ["url"]),ctx,"h").write("\">...</a></div>");}return body_0;})();
 // _sg/components/radio-button.dust
(function(){dust.register("_sg/components/radio-button",body_0);function body_0(chk,ctx){return chk.write("<input type=\"radio\" id=\"").exists(ctx._get(false, ["idp"]),ctx,{"block":body_1},null).write("\" checked />Hello, I'm a radio button");}function body_1(chk,ctx){return chk.reference(ctx._get(false, ["idp"]),ctx,"h");}return body_0;})();
 // _sg/components/spinner.dust
(function(){dust.register("_sg/components/spinner",body_0);function body_0(chk,ctx){return chk.write("<div class=\"spinner\" style=\"height: 50px; width: 100%\"></div>");}return body_0;})();
 // _sg/components/switch-button.dust
(function(){dust.register("_sg/components/switch-button",body_0);function body_0(chk,ctx){return chk.write("<div class=\"switch-button ").exists(ctx._get(false, ["class"]),ctx,{"block":body_1},null).write("\">Toggle me</div>");}function body_1(chk,ctx){return chk.reference(ctx._get(false, ["class"]),ctx,"h");}return body_0;})();
 // _sg/components/table.dust
(function(){dust.register("_sg/components/table",body_0);function body_0(chk,ctx){return chk.write("<table><tr><td class=\"title\">Name</td><td class=\"title\">Dahell</td><td class=\"title\">How much?</td></tr><tr><td>Dahell 1</td><td>Much dahell</td><td>Very dahell</td></tr><tr><td>Dahell 2</td><td>Much dahell</td><td>Very dahell</td></tr><tr><td>Dahell 3</td><td>Much dahell</td><td>Very dahell</td></tr></table>");}return body_0;})();
 // _sg/components/tabs.dust
(function(){dust.register("_sg/components/tabs",body_0);function body_0(chk,ctx){return chk.write("<div class=\"tabs\"><li><a href=\"\">Tab</a></li><li class=\"active\"><a href=\"\">Tab</a></li><li><a href=\"\">Tab</a></li></div>");}return body_0;})();
 // _sg/components/text-sample.dust
(function(){dust.register("_sg/components/text-sample",body_0);function body_0(chk,ctx){return chk.write("<section class=\"text-sample sg-component\"><div class=\"").exists(ctx._get(false, ["class"]),ctx,{"block":body_1},null).write("\">").exists(ctx._get(false, ["title"]),ctx,{"else":body_2,"block":body_3},null).write("</div>").exists(ctx._get(false, ["code"]),ctx,{"block":body_4},null).write("<div class=\"standard-body-font\">").exists(ctx._get(false, ["text"]),ctx,{"block":body_5},null).write("</div><div class=\"standard-body-font\">Use cases: ").exists(ctx._get(false, ["usage"]),ctx,{"block":body_6},null).write("</div></section>");}function body_1(chk,ctx){return chk.reference(ctx._get(false, ["class"]),ctx,"h");}function body_2(chk,ctx){return chk;}function body_3(chk,ctx){return chk.reference(ctx._get(false, ["title"]),ctx,"h");}function body_4(chk,ctx){return chk.write("<pre><code lang=\"css\">@include ").reference(ctx._get(false, ["class"]),ctx,"h").write(";</code></pre>");}function body_5(chk,ctx){return chk.reference(ctx._get(false, ["text"]),ctx,"h");}function body_6(chk,ctx){return chk.reference(ctx._get(false, ["usage"]),ctx,"h");}return body_0;})();
 // _sg/sections/colors.dust
(function(){dust.register("_sg/sections/colors",body_0);function body_0(chk,ctx){return chk.write("<section id=\"colors\" title=\"Colors\" class=\"sg-section\"><h1 class=\"sg\">Colors</h1>To do:<ul><li>When to use these colors</li></ul><section id=\"large-buttons\" class=\"sg-component\"><h4>Knewton Blues</h4><p>Used for branding, buttons, and [...]</p><div class=\"color-row\">").partial("_sg/components/color",ctx,{"hex":"#234166","name":"$dark-blue","light":"1"}).partial("_sg/components/color",ctx,{"hex":"#02B4D0","name":"$blue","light":"1"}).partial("_sg/components/color",ctx,{"hex":"#1ABCC1","name":"$turquoise","light":"1"}).partial("_sg/components/color",ctx,{"hex":"#159FA3","name":"$dark-turquoise","light":"1"}).write("</div></section><section id=\"large-buttons\" class=\"sg-component\"><h4>Secondary colors</h4><p>Used for [...]</p><div class=\"color-row\">").partial("_sg/components/color",ctx,{"hex":"#7AAC60","name":"$lime","light":"1"}).partial("_sg/components/color",ctx,{"hex":"#F6FDF0","name":"$lime-tint"}).partial("_sg/components/color",ctx,{"hex":"#10A1D5","name":"$blueberry","light":"1"}).partial("_sg/components/color",ctx,{"hex":"#E0F6Fe","name":"$blueberry-tint"}).write("</div><div class=\"color-row\">").partial("_sg/components/color",ctx,{"hex":"#F05400","name":"$gerbera","light":"1"}).partial("_sg/components/color",ctx,{"hex":"#FFEFE7","name":"$gerbera-tint"}).partial("_sg/components/color",ctx,{"hex":"#F15815","name":"$sweet-orange","light":"1"}).partial("_sg/components/color",ctx,{"hex":"#2D4E6A","name":"$navy","light":"1"}).write("</div><div class=\"color-row\">").partial("_sg/components/color",ctx,{"hex":"#DB524B","name":"$brick","light":"1"}).write("</div></section><section id=\"large-buttons\" class=\"sg-component\"><h4>Background colors</h4><p>Used for backgrounds.</p><div class=\"color-row\">").partial("_sg/components/color",ctx,{"hex":"#F1F1F1","name":"$background-grey"}).partial("_sg/components/color",ctx,{"hex":"#555","name":"$grey-on-grey","light":"1"}).partial("_sg/components/color",ctx,{"hex":"#FFFFFF","name":"$white"}).write("</div></section><section id=\"large-buttons\" class=\"sg-component\"><h4>Text colors</h4><p>Colors for headings, copy and labels.</p><div class=\"color-row\">").partial("_sg/components/color",ctx,{"hex":"#454545","name":"$body-text","light":"1"}).partial("_sg/components/color",ctx,{"hex":"#757575","name":"$default","light":"1"}).partial("_sg/components/color",ctx,{"hex":"#B5B5B5","name":"$dimmed-text","light":"1"}).write("</div></section><section id=\"large-buttons\" class=\"sg-component\"><h4>Interaction colors</h4><div class=\"color-row\">").partial("_sg/components/color",ctx,{"hex":"#9BA0A4","name":"$dark-blue","light":"1"}).partial("_sg/components/color",ctx,{"hex":"#1BACB6","name":"$blue","light":"1"}).partial("_sg/components/color",ctx,{"hex":"#159FA3","name":"$dark-turquoise","light":"1"}).write("</div></section></section>");}return body_0;})();
 // _sg/sections/forms.dust
(function(){dust.register("_sg/sections/forms",body_0);function body_0(chk,ctx){return chk.write("<section id=\"forms\" title=\"Forms\" class=\"sg-section\"><h1 class=\"sg\">Form elements</h1>To do:<ul><li>General form guidelines</li><li>Form validation</li><li>Checkboxes and radiobuttons</li></ul>").partial("_sg/sections/forms/fields",ctx,null).partial("_sg/sections/forms/buttons",ctx,null).write("<section id=\"other\" title=\"Other inputs\" class=\"sg-section\"><h2>Other inputs</h2><section id=\"dropdown-buttons\" class=\"sg-component\"><h4>Dropdown</h4>").partial("_sg/components/dropdown",ctx,null).write("<div class=\"sample\">").helper("snippet",ctx,{},{"src":"_sg/components/dropdown"}).write("</div></section><section id=\"datepicker\" class=\"sg-component\"><h4>Datepicker</h4>").partial("_sg/components/datepicker",ctx,{"label":"pick a date!"}).write("<div class=\"sample\">").helper("snippet",ctx,{},{"src":"_sg/components/datepicker"}).write("</div></section><section id=\"radio-button\" class=\"sg-component\"><h2>Radio buttons</h2>").partial("_sg/components/radio-button",ctx,{"label":"pick a date!"}).write("<div class=\"sample\">").helper("snippet",ctx,{},{"src":"_sg/components/radio-button"}).write("</div></section><section id=\"checkbox\" class=\"sg-component\"><h2>Checkboxes</h2>").partial("_sg/components/checkbox",ctx,{"label":"pick a date!"}).write("</section><section id=\"switch-buttons\" class=\"sg-component\"><h2>Toggle</h2>").partial("_sg/components/switch-button",ctx,{"class":"switch-on","label":"toggle"}).partial("_sg/components/switch-button",ctx,{"class":"switch-off","label":"Toggle"}).write("<div class=\"sample\">").helper("snippet",ctx,{},{"src":"_sg/components/switch-button","label":"toggle"}).write("</div></section></section></section>");}return body_0;})();
 // _sg/sections/forms/buttons.dust
(function(){dust.register("_sg/sections/forms/buttons",body_0);function body_0(chk,ctx){return chk.write("<section id=\"buttons\" title=\"Buttons\" class=\"sg-section\"><h2>Buttons</h2><section id=\"large-buttons\" class=\"sg-component\"><h4>Large buttons</h4>").partial("_sg/components/button",ctx,{"label":"Four column","class":"long"}).partial("_sg/components/button",ctx,{"label":"Four column","class":"long white-button"}).partial("_sg/components/button",ctx,{"label":"Four column","class":"long disabled"}).write("<div class=\"sample\">").helper("snippet",ctx,{},{"src":"_sg/components/button","label":"Four column","class":"long"}).helper("snippet",ctx,{},{"src":"_sg/components/button","label":"Four column","class":"long white-button"}).helper("snippet",ctx,{},{"src":"_sg/components/button","label":"Four column","class":"long disabled"}).write("</div></section><section id=\"medium-buttons\" class=\"sg-component\"><h4>Buttons</h4>").partial("_sg/components/button",ctx,{"label":"Three column","class":"medium"}).partial("_sg/components/button",ctx,{"label":"Three column","class":"white-button medium"}).partial("_sg/components/button",ctx,{"label":"Three column","class":"medium disabled"}).write("<div class=\"sample\">").helper("snippet",ctx,{},{"src":"_sg/components/button","label":"Three column","class":"medium"}).helper("snippet",ctx,{},{"src":"_sg/components/button","label":"Three column","class":"medium white-button"}).helper("snippet",ctx,{},{"src":"_sg/components/button","label":"Three column","class":"medium disabled"}).write("</div></section><section id=\"small-buttons\" class=\"sg-component\"><h4>Small buttons</h4>").partial("_sg/components/button",ctx,{"label":"Small","class":"short"}).partial("_sg/components/button",ctx,{"label":"Small","class":"short white-button"}).partial("_sg/components/button",ctx,{"label":"Small","class":"short disabled"}).write("<div class=\"sample\">").helper("snippet",ctx,{},{"src":"_sg/components/button","label":"Small","class":"short"}).helper("snippet",ctx,{},{"src":"_sg/components/button","label":"Small","class":"short white-button"}).helper("snippet",ctx,{},{"src":"_sg/components/button","label":"Small","class":"short disabled"}).write("</div></section><section id=\"mini-buttons\" class=\"sg-component\"><h4>Mini buttons</h4>").partial("_sg/components/button",ctx,{"label":"+","class":"mini"}).partial("_sg/components/button",ctx,{"label":"+","class":"mini white-button"}).partial("_sg/components/button",ctx,{"label":"+","class":"mini disabled"}).write("<div class=\"sample\">").helper("snippet",ctx,{},{"src":"_sg/components/button","label":"+","class":"mini"}).helper("snippet",ctx,{},{"src":"_sg/components/button","label":"+","class":"mini white-button"}).helper("snippet",ctx,{},{"src":"_sg/components/button","label":"+","class":"mini disabled"}).write("</div></section><section id=\"button-groups\" class=\"sg-component\"><h4>Button groups</h4>").partial("_sg/components/button",ctx,{"label":"Button","class":"group"}).partial("_sg/components/button",ctx,{"label":"Button","class":"group"}).partial("_sg/components/button",ctx,{"label":"Button","class":"group"}).write("<div class=\"sample\">").helper("snippet",ctx,{},{"src":"_sg/components/button","label":"Button","class":"group"}).helper("snippet",ctx,{},{"src":"_sg/components/button","label":"Button","class":"group"}).helper("snippet",ctx,{},{"src":"_sg/components/button","label":"Button","class":"group"}).write("</div></section></section>");}return body_0;})();
 // _sg/sections/forms/fields.dust
(function(){dust.register("_sg/sections/forms/fields",body_0);function body_0(chk,ctx){return chk.write("<section id=\"fields\" title=\"Fields\" class=\"sg-section\"><h2>Fields</h2><section id=\"fields-input-text\" class=\"sg-component\"><h4>Text input</h4>").partial("_sg/components/input-text",ctx,null).helper("snippet",ctx,{},{"src":"_sg/components/input-text"}).write("</section><section id=\"fields-dynamic-input-text\" class=\"sg-component\"><h4>Dynamic text input</h4><p>This input submits changes. <em>note: js not implemented yet.</em></p>").partial("_sg/components/input-text-dynamic",ctx,null).helper("snippet",ctx,{},{"src":"_sg/components/input-text-dynamic"}).write("</section><section id=\"fields-input-text\" class=\"sg-component\"><h4>Disabled text input</h4>").partial("_sg/components/input-text",ctx,{"class":"disabled","disabled":"true"}).helper("snippet",ctx,{},{"src":"_sg/components/input-text","class":"disabled","disabled":"true"}).write("</section></section>");}return body_0;})();
 // _sg/sections/guidelines.dust
(function(){dust.register("_sg/sections/guidelines",body_0);function body_0(chk,ctx){return chk.write("<section id=\"guidelines\" title=\"Developer guidelines\" class=\"sg-section\"><h1 class=\"sg\">General development guidelines</h1>Here go a few guidelines on how to use styling rules.To do:<section id=\"sass-guidelines\" title=\"\" class=\"sg-section\"><h2 class=\"sg\">How to write SCSS</h2>Here's some stuff.</section><section id=\"dust-guidelines\" title=\"\" class=\"sg-section\"><h2 class=\"sg\">How to write Dust</h2>Here's some stuff.</section><section id=\"visual-communication\" title=\"\" class=\"sg-section\"><h2 class=\"sg\">General visual communication guidelines</h2>Here's some stuff about the use of our logo, our colors and other visual communication devices.</section></section>");}return body_0;})();
 // _sg/sections/knewcons.dust
(function(){dust.register("_sg/sections/knewcons",body_0);function body_0(chk,ctx){return chk.write("<section id=\"knewcons\" title=\"Knewton Icons\" class=\"sg-section\"><h1 class=\"sg\">Knewton Icons</h1>To do:<ul><li>When and how to use these</li></ul>").partial("_sg/components/knewcon",ctx,{"knewcon":"icon-settings","name":"Settings"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-notify","name":"Notify"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-user","name":"User"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-search","name":"Search"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-caret-right","name":"Caret right"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-cancel","name":"Cancel"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-check","name":"Check"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-derived-topic","name":"Derived topic"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-target-topic","name":"Target topic"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-trashcan","name":"Trashcan"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-catalog","name":"Catalog"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-share","name":"Share"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-calendar","name":"Calendar"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-target-hex-solid","name":"Target"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-target-hex-outlined","name":"Target outlined"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-arrow","name":"Arrow"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-three-bars","name":"Three bars"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-home","name":"Home"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-pencil","name":"Pencil"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-users","name":"Users"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-user-add","name":"Add user"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-angle-right","name":"Angle right"}).partial("_sg/components/knewcon",ctx,{"knewcon":"icon-right-open-big","name":"Angle big"}).helper("snippet",ctx,{},{"src":"_sg/components/knewcon","knewcon":"icon-user","name":"Icon user"}).write("</section>");}return body_0;})();
 // _sg/sections/layout.dust
(function(){dust.register("_sg/sections/layout",body_0);function body_0(chk,ctx){return chk.write("<section id=\"layout\" title=\"Layout\" class=\"sg-section\">").partial("_sg/sections/layout/grids",ctx,null).write("To do:<ul><li>Use cases</li><li>Is pagination correct?</li></ul><section id=\"tables\" title=\"Tables\" class=\"sg-section\"><h2 class=\"sg\">Tables</h2>").partial("_sg/components/table",ctx,null).helper("snippet",ctx,{},{"src":"_sg/components/table"}).write("</section><section id=\"navigation\" title=\"Navigation\" class=\"sg-section\"><h2 class=\"sg\">Navigation stuff</h2><section id=\"tabs\" title=\"Tabs\" class=\"sg-component\"><h4>Tabs</h4>").partial("_sg/components/tabs",ctx,null).helper("snippet",ctx,{},{"src":"_sg/components/tabs"}).write("</section><section id=\"pagination\" title=\"Pagination\" class=\"sg-component\"><h4>Pagination</h4>").partial("_sg/components/page-controls",ctx,null).helper("snippet",ctx,{},{"src":"_sg/components/page-controls"}).write("</section></section></section>");}return body_0;})();
 // _sg/sections/layout/grids.dust
(function(){dust.register("_sg/sections/layout/grids",body_0);function body_0(chk,ctx){return chk.write("<section id=\"grids\" title=\"Grids\" class=\"sg-section\"><h1 class=\"sg\">Layout and grids</h1>We're using a 24 column grid system to define the layout on each page. &gt;1200px is the grid float breakdown.<pre><code>$grid-columns: 12; $gutter: 10px;</code></pre>To do:<ul><li>How to use bourbon columns?</li><li>What's the general column usage?</li><li>Screen-size related changes?</li><li>Gutter?</li></ul><section id=\"grid-sample\" class=\"sg-component\"><h4>Main column system</h4><div class=\"columns1of4\"></div><div class=\"columns3of4\"></div></section><section id=\"grid-sample\" class=\"sg-component\"><h4>Vertical spacing</h4><div class=\"columns4of4\"></div><div class=\"columns4of4\"></div></section><section id=\"padding-sample\" class=\"sg-component\"><h4>Wrapper and components padding</h4><div class=\"column-wrapper\"><div class=\"column-within\">").partial("_sg/components/button",ctx,{"label":"yo guys","class":"short"}).write("</div></div></section><section id=\"responsiveness\" title=\"Responsiveness\" class=\"sg-component\"><h4>Responsiveness</h4>Here some notes about using media-queries and adjust to different </section></section>");}return body_0;})();
 // _sg/sections/typography.dust
(function(){dust.register("_sg/sections/typography",body_0);function body_0(chk,ctx){return chk.write("<section id=\"typography\" title=\"Typography\" class=\"sg-section\"><h1 class=\"sg\">Typopgraphy</h1>To do:<ul><li>Set a typography standard across all designs</li><li>Use cases for both headings and font mixins</li><li>Standarize</ul><section id=\"styles\" title=\"Styles\" class=\"sg-section\"><h3>Headings</h3>").partial("_sg/components/text-sample",ctx,{"title":"Headline. h1","class":"headline-font","text":"MuseoSans 48pt 300 #555555 ($grey-on-grey)","code":"1","usage":"..."}).partial("_sg/components/text-sample",ctx,{"title":"Subheadline. h2, h3 (?).","class":"subhead-font","text":"MuseoSans 28px 900 #555555 ($grey-on-grey)","code":"1","usage":"..."}).partial("_sg/components/text-sample",ctx,{"title":"Section headline. h4","class":"head4-font","text":"MuseoSans 18px 900 #555555 ($grey-on-grey)","code":"1","usage":"..."}).write("<h3>Body text</h3>").partial("_sg/components/text-sample",ctx,{"title":"Body copy","class":"standard-body-font","text":"MuseoSans 16px 300 #555555 ($grey-on-grey)","code":"1"}).write("<h3>Link fonts</h3>").partial("_sg/components/text-sample",ctx,{"title":"Action link","class":"action-link-font","text":"MuseoSans 12px 700 uppercase 0.05em letter-spacing #555555 ($grey-on-grey)","code":"1"}).write("<section class=\"text-sample sg-component\"><div class=\"link action\">Action link active</div><div class=\"standard-body-font\">MuseoSans 12px 700 uppercase 0.05em letter-spacing #1abcc1 ($turquoise)</div><div class=\"standard-body-font\">Use cases: ...</div></section>").partial("_sg/components/text-sample",ctx,{"title":"Link","class":"std-link-font","text":"MuseoSans 16px 300 #1abcc1 ($turquoise)","code":"1"}).write("<h3>Input fonts</h3>").partial("_sg/components/text-sample",ctx,{"title":"Input","class":"input-font","text":"MuseoSans 14px 500 #b5b5b5 ($ashen-grey)"}).partial("_sg/components/text-sample",ctx,{"title":"Input label","class":"input-label-font","text":"MuseoSans 16px 700 #555555 ($grey-on-grey)"}).write("<h3>Table fonts</h3>").partial("_sg/components/text-sample",ctx,{"title":"Table row","class":"table-row-font","text":"MuseoSans 16px 300 0.015em #555555 ($grey-on-grey)"}).write("<h3>Navigation fonts</h3>").partial("_sg/components/text-sample",ctx,{"title":"Tab font","class":"tab-font","text":"MuseoSans 12px 700 uppercase 0.05em letter-spacing #555555 ($grey-on-grey)","code":"1"}).partial("_sg/components/text-sample",ctx,{"title":"Sidebar font","class":"sidebar-font","text":"MuseoSans 14px 500 0.05em letter-spacing #555555 ($grey-on-grey)"}).partial("_sg/components/text-sample",ctx,{"title":"Result paginator","class":"result-paginator-font","text":"MuseoSans 14px 500 0.015em letter-spacing #555555 ($grey-on-grey)"}).write("<h3>Other stuff</h3>").partial("_sg/components/text-sample",ctx,{"title":"Pending request font (?)","class":"pending-request-font","text":"MuseoSans 12px 500 uppercase 0.025em letter-spacing"}).write("</section><section id=\"lists\" title=\"Lists\" class=\"sg-component\"><h4>Lists</h4>").partial("_sg/components/list",ctx,null).write("</section></section>");}return body_0;})();
 // _sg/sections/ui-components.dust
(function(){dust.register("_sg/sections/ui-components",body_0);function body_0(chk,ctx){return chk.write("<section id=\"ui_components\" title=\"Other UI components\" class=\"sg-section\"><h1 class=\"sg\">UI components</h1>To do:<ul><li>Like, all of it. </li></ul><section id=\"\" title=\"\" class=\"sg-component\"><h2>Progress bars</h2>Here are some progress bar notes and stuff.</section><section id=\"\" title=\"\" class=\"sg-component\"><h2>Alerts</h2>Here are some alerts notes and stuff.").partial("_sg/components/alert",ctx,{"class":"alert-info","text":"Here's an informational alert."}).partial("_sg/components/alert",ctx,{"class":"alert-success","text":"Here's an alert about success."}).partial("_sg/components/alert",ctx,{"class":"alert-warning","text":"Here's a warning alert."}).partial("_sg/components/alert",ctx,{"class":"alert-danger","text":"Here's an alert about danger."}).write("</section><section id=\"\" title=\"\" class=\"sg-component\"><h2>Modal</h2>Here are some modal notes and stuff.</section><section id=\"\" title=\"\" class=\"sg-component\"><h2>Carousel</h2>Here are some carousel notes and stuff.</section><section id=\"\" title=\"\" class=\"sg-component\"><h2>Spinner</h2>Here are some spinner notes and stuff.").partial("_sg/components/spinner",ctx,null).write("</section></section>");}return body_0;})();
 // _sg/sg-header.dust
(function(){dust.register("_sg/sg-header",body_0);function body_0(chk,ctx){return chk.write("<header class=\"sg-header\"><div class=\"wrapper\"><div class=\"container\"><a href=\"\" id=\"logo\" class=\"logo-header\"><img src=\"styles/images/logo-white.png\" /></a><h1><a href=\"\">Knewton Style Guide / UI Library</a></h1></div></div></header>");}return body_0;})();
 // _sg/styleguide.dust
(function(){dust.register("_sg/styleguide",body_0);function body_0(chk,ctx){return chk.block(ctx.getBlock("header"),ctx,{"block":body_1},null).write("<div class=\"main sg\"><nav class=\"sg-nav\"><ul></ul></nav><div class=\"sg-sections\">").partial("_sg/sections/ui-components",ctx,null).partial("_sg/sections/typography",ctx,null).partial("_sg/sections/layout",ctx,null).partial("_sg/sections/forms",ctx,null).partial("_sg/sections/colors",ctx,null).partial("_sg/sections/knewcons",ctx,null).partial("_sg/sections/guidelines",ctx,null).write("</div></div>");}function body_1(chk,ctx){return chk.partial("_sg/sg-header",ctx,null);}return body_0;})();