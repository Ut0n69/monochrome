document.querySelector(".instration").addEventListener("click", function() {
  document.querySelector("main").innerHTML = `<div class="instration"><h1>underconstruction...</h1></div>`
}, false)


document.querySelector(".usage").addEventListener("click", function() {

  document.querySelector("main").innerHTML = `        <section>
  <h2>Button</h2>
  <hr color="#000">
  <div class="contents">
    <button class="btn-white">Button</button>
    <button class="btn-black">Button</button>
    <button class="btn-white btn-lg">Button</button>
    <button class="btn-black btn-lg">Button</button>
    <br>
    <br>
    <button class="btn-white round">Button</button>
    <button class="btn-black round">Button</button>
    <button class="btn-white round btn-lg">Button</button>
    <button class="btn-black round btn-lg">Button</button>
  </div>
  <div class="code">
    <code>
      &lt;button class="btn-white"&gt;Button&lt;/button&gt;
      <br> &lt;button class="btn-black"&gt;Button&lt;/button&gt;
      <br> &lt;button class="btn-white btn-lg"&gt;Button&lt;/button&gt;
      <br> &lt;button class="btn-black btn-lg"&gt;Button&lt;/button&gt;
      <br> &lt;button class="btn-white round"&gt;Button&lt;/button&gt;
      <br> &lt;button class="btn-black round"&gt;Button&lt;/button&gt;
      <br> &lt;button class="btn-white round btn-lg"&gt;Button&lt;/button&gt;
      <br> &lt;button class="btn-black round btn-lg"&gt;Button&lt;/button&gt;
    </code>
  </div>
</section>
<section>
  <h2>Humberger Menu</h2>
  <div class="contents">
    <hr color="#000">
    <table class="hbg-table">
      <tr>
        <td>
          <div class="hbg-menu">
            <div class="hbg">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </td>
        <td>
          <div class="hbg-menu-spin">
            <div class="hbg">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </td>
        <td>
          <div class="hbg-menu-arrow-left">
            <div class="hbg">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </td>
        <td>
          <div class="hbg-menu-arrow-right">
            <div class="hbg">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>.hbg-menu</td>
        <td>.hbg-menu-spin</td>
        <td>.hbg-menu-arrow-left</td>
        <td>.hbg-menu-spin-arrow-right</td>
      </tr>
    </table>

  </div>
  <div class="code">
    <code class="code-hbg-menu">
      &lt;div class="hbg-menu"&gt;
      <br> &nbsp&nbsp&lt;div class="hbg">
      <br> &nbsp&nbsp&nbsp&nbsp;&lt;span&gt;&lt;/span&gt;
      <br> &nbsp&nbsp&nbsp&nbsp&lt;span&gt;&lt;/span&gt;
      <br> &nbsp&nbsp&nbsp&nbsp&lt;span&gt;&lt;/span&gt;
      <br> &nbsp&nbsp&lt;/div&gt;
      <br> &lt;/div&gt;
    </code>
  </div>
</section>
<section>
  <h2>Form</h2>
  <hr color="#000">
  <div class="contents">
    <h3>Input</h3>
    <input class="input" type="text">
    <br>
    <h3>Select box</h3>
    <select class="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <br>
    <h3>Textarea</h3>
    <textarea class="textarea" rows="5"></textarea>
  </div>
  <div class="code">
    <code>
      &lt;input class="input" type="text"&gt;
      <br>
      <br>&lt;select class="select"&gt;
      <br>&nbsp&nbsp&lt;option&gt;1&lt;/option&gt;
      <br>&nbsp&nbsp&lt;option&gt;2&lt;/option&gt;
      <br>&nbsp&nbsp&lt;option&gt;3&lt;/option&gt;
      <br>&lt;/select&gt;
      <br>
      <br> &lt;textarea class="textarea" rows="5"&gt;&lt;/textarea&gt;
    </code>
  </div>
</section>
<section>
  <h2>Table</h2>
  <hr color="#000">
  <div class="contents">
    <h3>.table</h3>
    <table class="table">
      <thead>
        <tr>
          <th>th1</th>
          <th>th2</th>
          <th>th3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
    <h3>.table-border</h3>
    <table class="table-stripe">
      <thead>
        <tr>
          <th>th1</th>
          <th>th2</th>
          <th>th3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
    <h3>.table-hover</h3>
    <table class="table-hover">
      <thead>
        <tr>
          <th>th1</th>
          <th>th2</th>
          <th>th3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="code">
    <code>
      &lt;table class="table"&gt;
      <br>&nbsp&nbsp&lt;thead&gt;
      <br>&nbsp&nbsp&nbsp&nbsp&lt;tr&gt;
      <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lt;th&gt;th1&lt;/th&gt;
      <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp・・・
      <br>&nbsp&nbsp&nbsp&nbsp&lt;/tr&gt;
      <br>&nbsp&nbsp&lt;/thead&gt;
      <br>&nbsp&nbsp&lt;tbody&gt;
      <br>&nbsp&nbsp&nbsp&nbsp&lt;tr&gt;
      <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lt;td&gt;1&lt;/td&gt;
      <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp・・・
      <br>&nbsp&nbsp&nbsp&nbsp&lt;/tr&gt;
      <br>&nbsp&nbsp&nbsp&nbsp・・・
      <br>&nbsp&nbsp&lt;/tbody&gt;
      <br>&lt;/table&gt;
    </code>
  </div>
</section>
<section>
  <h2>Card</h2>
  <hr color="#000">
  <div class="contents">
    <div class="card">
      <img src="http://placehold.jp/300x300.png">
      <p>title</p>
    </div>
  </div>
  <div class="code code-button">
    <code>
      &lt;div class="card"&gt;
      <br>&nbsp;&nbsp;&lt;img src="http://placehold.jp/300x300.png"&gt;
      <br>&nbsp;&nbsp;&lt;p&gt;title&lt;/p&gt;
      <br>&lt;/div&gt;      
    </code>
  </div>
</section>`

  document.querySelector(".hbg-menu").addEventListener("click", function() {
    document.querySelector(".hbg-menu .hbg").classList.toggle("active")
  }, false)

  document.querySelector(".hbg-menu-spin").addEventListener("click", function() {
    document.querySelector(".hbg-menu-spin .hbg").classList.toggle("active")
  }, false)

  document.querySelector(".hbg-menu-arrow-left").addEventListener("click", function() {
    document.querySelector(".hbg-menu-arrow-left .hbg").classList.toggle("active")
  }, false)

  document.querySelector(".hbg-menu-arrow-right").addEventListener("click", function() {
    document.querySelector(".hbg-menu-arrow-right .hbg").classList.toggle("active")
  }, false)

}, false)