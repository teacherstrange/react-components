/* eslint-disable */
import React, { Fragment } from 'react'
import { Container } from '../container'

export default {
  title: 'Core/Typograhy'
}

export const Typography = () => (
  <Fragment>
    <h1 data-size="display">Display Title</h1>
    <h1>H1 Heading</h1>
    <h2>H2 Heading</h2>
    <h3>H3 Heading</h3>
    <h4 data-weight="medium" data-text-color="positive">H4 Heading</h4>
    <h5 data-weight="regular">H5 Heading</h5>
    <h6>H6 Heading</h6>

    <p data-size="small">This is a small paragraph</p>
    <p>This is a standard paragraph</p>
    <p data-size="big">This is a big paragraph</p>

    <p><a href="#">Text link</a></p>
    <p>
      <a href="#" data-no-link-style>
        Text link with
        {' '}
        {' '}
        <code>data-no-link-style</code>
      </a>
    </p>
    <p>
      <a>
        This is a link without
        <em>href</em>
      </a>
    </p>
    <p>
      <strong>Strong</strong>
      {' '}
      is used to indicate strong importance.
    </p>
    <p>
      This text has added
      <em>emphasis</em>
      .
    </p>
    <p>
      The
      <b>b element</b>
      {' '}
      is stylistically different text from normal text
    </p>
    <p>
      The
      <i>i element</i>
      {' '}
      is text that is offset from the normal text.
    </p>
    <p>
      The
      <u>u element</u>
      {' '}
      is text with an unarticulated
    </p>
    <p>
      <del>This text is deleted.</del>
    </p>
    <p>
      <ins>This text is inserted.</ins>
    </p>
    <p>
      <s>This text has a strikethrough</s>
      .
    </p>
    <p>
      Superscript
      <sup>®</sup>
      .
    </p>
    <p>
      Subscript for things like H
      <sub>2</sub>
      O.
    </p>
    <p>
      <small>This small text is small for for fine print, etc.</small>
    </p>
    <p>
      Abbreviation:
      <abbr title="HyperText Markup Language">HTML</abbr>
    </p>
    <p>
      <q cite="https://mzl.la/2MHdcJy">
        This text is a short inline quotation.
      </q>
    </p>
    <p>
      The
      <dfn>dfn element</dfn>
      {' '}
      indicates a definition.
    </p>
    <p>
      The
      <var>variable element</var>
      , such as
      <var>x</var>
      {' '}
      =
      <var>y</var>
      .
    </p>
    <address>
      2518 W Armitage Ave
      <br />
      Chicago IL 60647
    </address>
    <p>
      The time element:
      <time dateTime="2013-04-06T12:32+00:00">2 weeks ago</time>
    </p>
    <dl>
      <dt>Definition List Title</dt>
      <dd>This is a definition list division.</dd>
    </dl>
    <ul>
      <li>List item 01</li>
      <li>List item 02</li>
      <li>List item 03</li>
    </ul>
    <ol>
      <li>Item 01</li>
      <li>Item 02</li>
      <li>Item 03</li>
      <li>Item 04</li>
      <li>Item 05</li>
      <li>Item 06</li>
      <li>Item 07</li>
      <li>Item 08</li>
      <li>Item 09</li>
      <li>Item 10</li>
      <li>Item 11</li>
      <li>Item 12</li>
      <li>Item 13</li>
      <li>Item 14</li>
      <li>Item 15</li>
      <li>Item 16</li>
      <li>Item 17</li>
      <li>Item 18</li>
      <li>Item 19</li>
      <li>Item 20</li>
    </ol>
    <p>
      <code>&lt;kbd&gt;</code>
      {' '}
      tag example
      {' '}
      <kbd>ctrl + ,</kbd>
    </p>
    <p>
      <a href="#">
        This is a link with
        <code>code</code>
      </a>
    </p>
    <p><samp>This is sample output from a computer program.</samp></p>
    <p>
      The
      <mark>mark element</mark>
      {' '}
      indicates a highlight.
    </p>

    <p data-text-color="danger">Dangerous text</p>
    <p data-text-color="warning">Attention text</p>
    <p data-text-color="positive">Positive text</p>

  </Fragment>
)

export const Rules = () => (
  <Fragment>
    <p>0pt spaced rule</p>
    <hr />
    <p>8pt spaced rule</p>
    <hr data-spacing="8" />
    <p>16pt spaced rule</p>
    <hr data-spacing="16" />
    <p>24pt spaced rule</p>
    <hr data-spacing="24" />
    <p>32pt spaced rule</p>
    <hr data-spacing="32" />
    <p>40pt spaced rule</p>
    <hr data-spacing="40" />
  </Fragment>
)

export const Prose = () => (
  <Container size="medium">
    <article data-prose>
      <h1>Sample Title</h1>
      <p data-size="big">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius dolores,
        tempore quas labore officiis praesentium. Porro sed dolorem, numquam temporibus
        consequuntur quam doloremque ducimus error tempora illo aliquam nesciunt nostrum!
      </p>
      <h2>Sample H2 Title</h2>
      <img style={{ width: '100%' }} src="https://images.unsplash.com/photo-1593963171957-d87a6279226d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      <p data-size="medium">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius dolores,
        tempore quas labore officiis praesentium. Porro sed dolorem, numquam temporibus
        consequuntur quam doloremque ducimus error tempora illo aliquam nesciunt nostrum!
      </p>
      <hr data-spacing="48" />
      <h2>Sample H2 Title</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius dolores,
        tempore quas labore officiis praesentium. Porro sed dolorem, numquam temporibus
        consequuntur quam doloremque ducimus error tempora illo aliquam nesciunt nostrum!
      </p>
      <img style={{ width: '100%' }} src="https://images.unsplash.com/photo-1593963171957-d87a6279226d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius dolores,
        tempore quas labore officiis praesentium. Porro sed dolorem, numquam temporibus
        consequuntur quam doloremque ducimus error tempora illo aliquam nesciunt nostrum!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius dolores,
        tempore quas labore officiis praesentium. Porro sed dolorem, numquam temporibus
        consequuntur quam doloremque ducimus error tempora illo aliquam nesciunt nostrum!
      </p>
      <h3>Sample H3 Title</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius dolores,
        tempore quas labore officiis praesentium. Porro sed dolorem, numquam temporibus
        consequuntur quam doloremque ducimus error tempora illo aliquam nesciunt nostrum!
      </p>
      <h4>Sample H4 Title</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius dolores,
        tempore quas labore officiis praesentium. Porro sed dolorem, numquam temporibus
        consequuntur quam doloremque ducimus error tempora illo aliquam nesciunt nostrum!
      </p>

    </article>
  </Container>
)
