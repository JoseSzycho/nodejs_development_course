# Implementing a Basic JSON Parser with Regular Expressions

## JSON Parser Implementation

The algorithm is implemented using three principal functions.

- **JSONtokenization**: tokenize the function
- **isValidToken**: checks each token while performing the tokenization in order to check if a token is valid and provide error handling proving informative error messages.
- **myJSONParse**: performs the JSON parse of the string.

In order to know more about these functions, please read the section after **reflection** section. For deeper explanation, please jump into each `.js` file.

## Reflection

When I started the task, I thought it was going to be simple and easy to do.

But when I started the task of creating the function to tokenize the JSON string, I ran into the difficulty of how to separate each unit of the code in a way that made it easy to process the tokens.

Once I decided what the algorithm would be to unite all the tokens, I had to find the correct way to extract each token from the string. That was when I came into contact with regex, which at first seemed VERY difficult to me.

Thanks to the study and the classes provided, I was able to notice that regex is very structured and follows the letters, and that once you have it in mind Mind that part of the text you want to extract, that regex has a lot of power to do the job.

- Challenges I found
  - How to know what type of data I was tokenizing. Thanks to groups feature, each mach provided the necessary information of what kind of data was extracted (if a value, a "{", ",", etc.)
  - How to know if a token is valid. It toke my a lot of effort to provide a answer to this, after writing by hand several times many JSON examples, I realized that, when writing, you need to know what is the previous token in order to write the next one, so this is the approach I toke.

## Functions

<dl>
<dt><a href="#myJSONParse">myJSONParse(JSONString)</a> ⇒ <code>any</code></dt>
<dd><p>Parses a JSON string, constructing the JavaScript value or object described by the string.</p>
<p>It works by getting the tokenized JSON string, after that, it implements an algorithm
that process each token in order to decide if the token is a value to add,
if is a the aperture of an array or object, or if it is the closing of
an array or object.</p>
</dd>
<dt><a href="#JSONtokenization">JSONtokenization(JSONstring)</a> ⇒ <code>array</code></dt>
<dd><p>Perform the tokenization of a structured JSON string.</p>
<p>All primitive values are parsed into its correct data
type, even if the primitive is part of an object or array.</p>
<p>To differentiate a key of a string, strings are inside &quot;&lt;...&gt;&quot; and
keys are inside &#39;&quot;&lt;...&gt;&quot;&#39;</p>
</dd>
</dl>

<a name="myJSONParse"></a>

## myJSONParse(JSONString) ⇒ <code>any</code>

Parses a JSON string, constructing the JavaScript value or object described by the string.

It works by getting the tokenized JSON string, after that, it implements an algorithm
that process each token in order to decide if the token is a value to add,
if is a the aperture of an array or object, or if it is the closing of
an array or object.

**Kind**: global function  
**Returns**: <code>any</code> - The parsed value or object

| Param      | Type                | Description |
| ---------- | ------------------- | ----------- |
| JSONString | <code>String</code> | The string  |

<a name="JSONtokenization"></a>

## JSONtokenization(JSONstring) ⇒ <code>array</code>

Perform the tokenization of a structured JSON string.

All primitive values are parsed into its correct data
type, even if the primitive is part of an object or array.

To differentiate a key of a string, strings are inside "<...>" and
keys are inside '"<...>"'

**Kind**: global function  
**Returns**: <code>array</code> - The tokenized JSON string

| Param      | Type                | Description     |
| ---------- | ------------------- | --------------- |
| JSONstring | <code>string</code> | The JSON string |
