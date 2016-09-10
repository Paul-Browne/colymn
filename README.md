##colymn

#####An infinite possibilities Grid System - let colymn do the maths, allowing you to use whatever grid style you like.

####Features 
* no dependencies - written in pure javascript
* lightweight - ~1kb when minified and gzipped.
* easy to use - if you can use fractions, you can use colymn
* responsive - includes upto 8 breakpoints - reacts to resize events
* no clearfix containers! - automagically calculates where to clear floats

___

####Setup
include in the `<head>` and call before the closing `</body>`

```html
  <script src="js/colymn.min.js"></script>
</head>

  <script>
    colymn();
  </script>
</body>
```
or with options

```html
  <script>
    colymn({
      margin: 4,
      phone: 680, // upto 680px
      tablet: 1040, // upto 1040px
      desktop: 1400, //greater than 1400px
     });
  </script>
</body>
```
___

####How to use

You write column widths like so `prefix-col-X-Y`, where `X ÷ Y` is the columns width and the `prefix` is either `all`, `phone`, `phone-portrait`, `phone-landscape`, `tablet`, `tablet-portrait`, `tablet-landscape`, `laptop` or `desktop`, these represent the different screen sizes. (defaults shown)

| type | Prefix | Size |
|------|--------|------|
|cross browser |`all`| `all sizes`|
|phone |`phone`| `less than 680px wide`|
|phone: portrait |`phone-portrait`| `less than 680px wide & height greater than width`|
|phone: landscape |`phone-landscape`| `less than 680px wide & width greater than height`|
|tablet |`tablet`| `greater than 680px and less than 1040px wide`|
|tablet: portrait |`tablet-portrait`| `greater than 680px and less than 1040px wide & height greater than width`|
|tablet: landscape |`tablet-landscape`| `greater than 680px and less than 1040px wide & width greater than height`|
|laptop |`laptop`| `greater than 1040px`|
|desktop |`desktop`| `greater than 1400px`|

___

#### Simple Column Example

The bread-and-butter of any grid system is its ability to create columns. colymn does this like so...

```html
<div class="all-col-3-4" id="main">...</div>
<div class="all-col-1-4" id="sidebar">...</div>
```

This markup would result in 2 columns - a main and a sidebar, three quarters and one quarter wide, respectively.
...but you probably wouldn't want two columns on mobile, so you could write something like this

```html
<div class="all-col-3-4 phone-center-6-7" id="main">...</div>
<div class="phone-center-6-7 all-col-1-4" id="sidebar">...</div>
<!-- note: it doesn't matter what order you write the classes -->
```

This markup would result in 2 columns on everything _except_ mobiles, on which both columns would be 85% wide, with the sidebar beneath the main column.

___

#### Simple Centered Example

Centered columns are columns that are centered - shocker!

```html
<div class="all-center-6-7 laptop-center-3-4" id="first">...</div>
<div class="all-center-6-7 laptop-center-3-4" id="second">...</div>
```

On all devices both columns will be six sevenths wide and centered up until devices with a screen size greater than 1040px wide, where both columns will be three quarters wide and centered.

you can also center a column with a **fixed** width in either pixels or ems

```html
<div class="desktop-center-960px" id="first">...</div>
<div class="desktop-center-60em" id="second">...</div>
```

In the above example you would get a centered column 960px and 60em wide, when viewed on a desktop


######NOTE
The `all` class acts as shorthand to target all devices.
```html
<div class="all-center-6-7">...</div>
<!-- is the same as -->
<div class="phone-center-6-7 tablet-center-6-7 laptop-center-6-7 desktop-center-6-7">...</div>
```
and you can omit the `desktop` if you have a specified for `laptop`
```html
<div class="laptop-center-6-7">...</div>
<!-- is the same as -->
<div class="laptop-center-6-7 desktop-center-6-7">...</div>
```
also, how you target devices is up to you, for instance
```html
<div class="all-col-3-4 phone-center-6-7">...</div>
<!-- is the same as -->
<div class="phone-center-6-7 tabet-col-3-4 laptop-col-3-4">...</div>
```
___

#### portrait and landscape
If you want to get more granular with your devices, then you can also specify `portrait` and `landscape` for phones and tablets

```html
<div class="all-col-3-4 phone-portrait-center-5-6 tablet-portrait-center-7-8" id="main">...</div>
<div class="all-col-1-4 phone-portrait-center-5-6 tablet-portrait-center-7-8" id="sidebar">...</div>
```
so, in the above example the main column will be three quarters wide, except on phones and tablets when in portrait, at which point they will be five sixth wide and seven eighths wide, respectively.

######NOTE
```html
<div class="phone-center-5-6 phone-landscape-col-1-2">...</div>
<!-- is the same as -->
<div class="phone-portrait-center-5-6 phone-landscape-col-1-2">...</div>
```

#### Simple Offset Example

Offsetting a column will push it to the right by the desired amount.

```html
<div class="all-col-1-4" id="first">...</div>
<div class="all-col-1-4 all-offset-1-4" id="second">...</div>
<div class="all-col-1-4" id="third">...</div>
```

In this example the second column is offset - pushed to the right, by one quarters width. 

###### NOTE

Notice how all the columns widths plus the offset equal one ¼ + ¼ + ¼ + ¼ = 1, this is to ensure that the row of columns is cleared after the last column - columns are cleared after the total widths plus offsets equals one.

A centered column cannot be offset.

___

#### Simple Displaced Column Example - aligned to the parents margin

You can displace (push or pull) columns to the left or right in order to let content in the parent column (eg. text) flow around the displaced column.

```html
<div class="all-center-8-10" id="main">
    <h1>...</h1>
    <p>...</p>
    <div class="tablet-landscape-col-3-5 laptop-col-3-5 tablet-landscape-left-0-1 laptop-left-0-1" id="left">
        <h2>...</h2>
        <p>...</p>
    </div>
    <p>...</p>
</div>
```

The class `laptop-left-0-1` would result in a column being displaced to the left and aligned to the left margin of Its parent column (main)
The class `laptop-col-3-5` specifies the width of the displaced column
___

#### Simple Displaced Column Example - pushed through the parents margin

You can also displace columns through the left or right margin of Its parent.

```html
<div class="all-center-8-10" id="main">
    <h1>...</h1>
    <p>...</p>
    <div class="all-col-3-5 all-left-1-10" id="left">
        <h2>...</h2>
        <p>...</p>
    </div>
    <p>...</p>
</div>
```
Since the main column is eight tenths wide and centered, that leaves one tenth of free space on either side. By adding the class `all-left-1-10` the displaced column is pushed through Its parents left margin by one tenth 

######NOTE

Since displaced columns are floated, but not cleared, make sure the content in Its parent column is longer than that in the displaced column.

A centered column cannot be displaced.

___

#### Simple Nested Example

Infinite nesting of columns is possible, just remember; the more you nest, the smaller the columns will become.

```html
<div class="all-center-9-10" id="first">
    <div class="all-col-3-4" id="second">
        <div class="all-center-12-13" id="third">
            <div class="all-col-4-8 all-offset-1-8" id="fourth">...</div>
            <div class="all-col-3-8" id="fifth">...</div>
        </div>
    </div>
    <div class="all-col-1-4" id="sixth">...</div>
</div>
```
######NOTE

In the above example the `fifth` column would only be about 20% of the total viewport wide. 

___

#####Auto clearing of floats

clear-floats are added automatically, independently for each viewport. They are also removed, then re-added everytime a user resizes their device.

In this example you can see how the auto-insertion of "clear-floats" allows you to create layouts that would be impossible when using standard clearfix containers.

```html
<div class="phone-col-1-2 tablet-col-1-3 laptop-col-1-4 desktop-1-5">...</div>
<div class="phone-col-1-2 tablet-col-1-3 laptop-col-1-4 desktop-1-5">...</div>
<!-- clear float -->        <!-- for phone -->
<div class="phone-col-1-2 tablet-col-1-3 laptop-col-1-4 desktop-1-5">...</div>
<!-- clear float -->        <!-- for tablet -->
<div class="phone-col-1-2 tablet-col-1-3 laptop-col-1-4 desktop-1-5">...</div>
<!-- clear float -->        <!-- for phone and laptop -->
<div class="phone-col-1-2 tablet-col-1-3 laptop-col-1-4 desktop-1-5">...</div>
<!-- clear float -->        <!-- for desktop -->

```

######NOTE

The comments show where, and for what device the clear-floats are added

___
####[Demo of all the above](https://output.jsbin.com/locuqe)
___

####Nomenclature

Class Names cheatsheet | Description
-----------------------------|------------
`prefix-col-x-y`  | A column for the chosen viewport. X number of columns wide from a total of Y
`prefix-center-x-y` | Center the column for that viewport. X number of columns wide from a total of Y
`prefix-center-x(px|em)` | Center the column for that viewport. X number of **pixels or ems** 
`prefix-offset-x-y` | Offset the column to the right by X number of columns from a total of Y
`prefix-left-x-y` | Displace a column to the left by X number of columns from a total of Y
`prefix-right-x-y` | Displace a column to the right by X number of columns from a total of Y

* choose one of the prefixes `all`, `phone`, `phone-portrait`, `phone-landscape`, `tablet`, `tablet-portrait`, `tablet-landscape`, `laptop` or `desktop` for that viewport
* classes `left`, `right` and `offset` must be accompanied with a `col` class to specify width.
___

####html helper classes
Since this grid system is written in javascript and not css, I have added some helper classes that attach themselves to the root `html` element of the documet, so that you can match up the grid system in your css. So for example when on a tablet in landscape these classes will be added to the html element `<html class="tablet landscape">` This way you can match the style like so

```css
.some-element { /* all */ }
html.phone .some-element { /* phones */ }
html.phone.portrait .some-element { /* phones in portrait only */ }
html.phone.landscape .some-element { /* phones in landscape only */ }
html.tablet .some-element { /* tablets */ }
html.tablet.portrait .some-element { /* tablets in portrait only */ }
html.tablet.landscape .some-element { /* tablets in landscape only */ }
html.laptop .some-element { /* laptops */ }
html.desktop .some-element { /* desktops */ }
```

######NOTE
On desktop both the classes `<html class="laptop desktop">` will be present, this is intentional as to mimic the way the grid inheritence works. If you write your css in a 'mobile first' approach, as above, then it won't be a problem.

####Questions

>Can I mix my column sizes?

>Yes, you can use any mixture of wierd and wonderful fractions such as;

```html
<div class="all-col-1-6">...</div>
<div class="all-col-2-18">...</div>
<div class="all-col-2-14">...</div>
<div class="all-col-3-10">...</div>
<div class="all-col-3-20">...</div>
<div class="all-col-4-31">...</div>
```
Just so long as they all add up to 1

>How accurate are the terms 'phone' and 'tablet'

>About as accurate as possible without using a lot of javascript to detect user agents etc. Either way all ipads come under tablets and iphones come under phones, as do samsung galaxys. The most common phones and tablets get catagorized correctly. Some phablets may come under tablets, others will be phones.

>When i resize my browser past a breakpoint the layout doesn't always update immediately

>This is intentional. I added a debounced resize so that the layout isn't been recalculated every time the viewport changes by a pixel. Basically the viewport has to stay the samesize, after been resized, for one-fifth of a second (200ms) before the layout is recalculated. 

___
####version

######2.1
* adds html helper classes

######2
* major update

######1.4
* added options

######1.3
* added fixed width containers

######1.2
* bugfix - excluded svg elements

######1.1
* initial release
* inherited from epicGrid


