##colymn

#####An infinite possibilities Grid System - let colymn do the maths, allowing you to use whatever grid style you like.

####Features 
* no dependencies - written in pure javascript
* lightweight - ~1kb when minified and gzipped.
* easy to use - if you can use fractions, you can use colymn
* responsive - includes upto 6 breakpoints - reacts to resize events
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
      phonePortrait: 300,
      phoneLandscape: 300,
      tabletPortrait: 440,
      tabletLandscape: 640,
      desktop: 1024,
      fullHD: 1440
    });
  </script>
</body>
```
___

####How to use

You write column widths like so `prefix-col-X-Y`, where `X ÷ Y` is the columns width and the `prefix` is either `xx, pp, pl, tp, tl, dt or hd`, these represent the different screen sizes. (defaults shown)

| type | Prefix | Size |
|------|--------|------|
|cross browser |`xx`| `all sizes`|
|phone: portrait |`pp`| `greater than 300px & height greater than width`|
|phone: landscape |`pl`| `greater than 300px & width greater than height`|
|tablet: portrait |`tp`| `greater than 440px & height greater than width`|
|tablet: landscape |`tl`| `greater than 640px & width greater than height`|
|desktop |`dt`| `greater than 1024px`|
|full hd |`hd`| `greater than 1440px`|

___

####grid inheritence

colymn works so that breakpoints inherit the size from smaller breakpoints of similar aspect ratio. for example;

```html
<div class="pp-center-5-6 pl-col-3-4" id="main">...</div>
<div class="pp-center-5-6 pl-col-1-4" id="sidebar">...</div>
```

when this example is viewed on a phone in portrait or a tablet in portrait, there will be 2 columns that are almost the full width of the screen, with the sidebar following after the main column. But when viewed on a phone in landscape, on a tablet in landscape, on a desktop or a full HD monitor, there will be 2 columns: a main column and a sidebar, three quarters and one quarter wide respectively. This is because `hd`, `dt` and `tl` have a similar aspect ratio as `pl` (all 4 are wider than they are high) and therefore inherit the `pl` markup.

Here is a table to show how inheritence works.

|    | xx | pp | pl | tp | tl | dt | hd |
|----|----|----|----|----|----|----|----|
| xx |    |    |    |    |    |    |    |
| pp |yes |    |    |    |    |    |    |
| pl |yes |no  |    |    |    |    |    |
| tp |yes |yes |no  |    |    |    |    |
| tl |yes |no  |yes |no  |    |    |    |
| dt |yes |no  |yes |no  |yes |    |    |
| hd |yes |no  |yes |no  |yes |yes |    |

___

#### Simple Column Example

The bread-and-butter of any grid system is its ability to create columns. colymn does this like so...

```html
<div class="tl-col-3-4" id="main">...</div>
<div class="tl-col-1-4" id="sidebar">...</div>
```

On a screen size greater than 640px wide, this markup would result in 2 columns - a main and a sidebar, three quarters and one quarter wide, respectively. On a screen size less than or equal to 640px, the columns would both be 100% wide, with the sidebar following after the main column.

######NOTE

In the above example, since there is no `xx-col`, `pp-col`, `pl-col` or `tp-col` markup, columns will revert to a width of 100% wide, when the screen is less than or equal to 640px. 

In the above example, since there is no `dt-col` or `hd-col` markup, columns will **inherit** the width of the previous largest breakpoint of similar aspect ratio, ie. `tl-col`, when the screen width is greater than 1024px and 1440px.

___

#### Simple Centered Example

Centered columns are columns that are centered - shocker!

```html
<div class="xx-center-6-7 dt-center-3-4" id="first">...</div>
<div class="xx-center-6-7 dt-center-3-4" id="second">...</div>
```

On all devices both columns will be six sevenths wide and centered up until devices with a screen size greater than 1024px wide, where both columns will be three quarters wide and centered.

you can also center a column with a **fixed** width in either pixels or ems

```html
<div class="dt-center-960px" id="first">...</div>
<div class="dt-center-60em" id="second">...</div>
```

In the above example you would get a centered column 960px and 60ems wide, when viewed on a desktop


######NOTE
There is no point declaring a new breakpoint if it is the same as the previous one ie.
```html
<div class="xx-center-6-7 dt-center-3-4">...</div>
<!-- is the same as -->
<div class="xx-center-6-7 pp-center-6-7 pl-center-6-7 tp-center-6-7 tl-center-6-7 dt-center-3-4 hd-center-3-4">...</div>
```

___

#### Simple Offset Example

Offsetting a column will push it to the right by the desired amount.

```html
<div class="tl-col-1-4" id="first">...</div>
<div class="tl-col-1-4 tl-offset-1-4" id="second">...</div>
<div class="tl-col-1-4" id="third">...</div>
```

In this example the second column is offset - pushed to the right, by one quarters width, on screens larger than 640px. 

###### NOTE

Notice how all the columns widths plus the offset equal one ¼ + ¼ + ¼ + ¼ = 1, this is to ensure that the column is cleared after the last column - columns are cleared after the total widths plus offsets equals one.

A centered column cannot be offset.

___

#### Simple Displaced Column Example - aligned to the parents margin

You can displace (push or pull) columns to the left or right in order to let content in the parent column (eg. text) flow around the displaced column.

```html
<div class="tl-center-8-10" id="main">
    <h1>...</h1>
    <p>...</p>
    <div class="tl-col-3-5 tl-left-0-1" id="left">
        <h2>...</h2>
        <p>...</p>
    </div>
    <p>...</p>
</div>
```

The markup `tl-left-0-1` would result in a column being displaced to the left and aligned to the left margin of Its parent column (main)

___

#### Simple Displaced Column Example - pushed through the parents margin

You can also displace columns through the left or right margin of Its parent.

```html
<div class="tl-center-8-10" id="main">
    <h1>...</h1>
    <p>...</p>
    <div class="tl-col-3-5 tl-left-1-10" id="left">
        <h2>...</h2>
        <p>...</p>
    </div>
    <p>...</p>
</div>
```
Since the main column is eight tenths wide and centered, that leaves one tenth of free space on either side. By adding the class `tl-left-1-10` the displaced column is pushed through Its parents left margin by one tenth 

######NOTE

Since displaced columns are floated, but not cleared, make sure the content in Its parent column is longer than that in the displaced column.

A centered column cannot be displaced.

___

#### Simple Nested Example

Infinite nesting of columns is possible, just remember; the more you nest, the smaller the columns will become.

```html
<div class="tl-center-9-10" id="first">
    <div class="tl-col-3-4" id="second">
        <div class="tl-center-12-13" id="third">
            <div class="tl-col-4-8 tl-offset-1-8" id="fourth">...</div>
            <div class="tl-col-3-8" id="fifth">...</div>
        </div>
    </div>
    <div class="tl-col-1-4" id="sixth">...</div>
</div>
```
######NOTE

In the above example the `fifth` column would only be about 20% of the total viewport wide. 

___

#####Auto clearing of floats

clear-floats are added automatically, independently for each viewport. They are also removed, then re-added everytime a user resizes their device.

In this example you can see how the auto-insertion of "clear-floats" allows you to create layouts that would be impossible when using standard clearfix containers.

```html
<div class="pp-col-1-2 pl-col-1-3 tp-col-1-4 tl-col-1-5 dt-col-1-6 hd-col-1-7"></div>
<div class="pp-col-1-2 pl-col-1-3 tp-col-1-4 tl-col-1-5 dt-col-1-6 hd-col-1-7"></div>
<!-- <div style="clear:both; class="colymn-clearfix"></div>-->    <!-- pp -->
<div class="pp-col-1-2 pl-col-1-3 tp-col-1-4 tl-col-1-5 dt-col-1-6 hd-col-1-7"></div>
<!-- <div style="clear:both; class="colymn-clearfix"></div>-->    <!-- pl -->
<div class="pp-col-1-2 pl-col-1-3 tp-col-1-4 tl-col-1-5 dt-col-1-6 hd-col-1-7"></div>
<!-- <div style="clear:both; class="colymn-clearfix"></div>-->    <!-- pp and tp -->
<div class="pp-col-1-2 pl-col-1-3 tp-col-1-4 tl-col-1-5 dt-col-1-6 hd-col-1-7"></div>
<!-- <div style="clear:both; class="colymn-clearfix"></div>-->    <!-- tl -->
<div class="pp-col-1-2 pl-col-1-3 tp-col-1-4 tl-col-1-5 dt-col-1-6 hd-col-1-7"></div>
<!-- <div style="clear:both; class="colymn-clearfix"></div>-->    <!-- pp, pl and dt -->
<div class="pp-col-1-2 pl-col-1-3 tp-col-1-4 tl-col-1-5 dt-col-1-6 hd-col-1-7"></div>
<!-- <div style="clear:both; class="colymn-clearfix"></div>-->    <!-- hd -->
<div class="pp-col-1-2 pl-col-1-3 tp-col-1-4 tl-col-1-5 dt-col-1-6 hd-col-1-7"></div>
<!-- <div style="clear:both; class="colymn-clearfix"></div>-->    <!-- pp and tp -->
<div class="pp-col-1-2 pl-col-1-3 tp-col-1-4 tl-col-1-5 dt-col-1-6 hd-col-1-7"></div>
<!-- <div style="clear:both; class="colymn-clearfix"></div>-->    <!-- pl -->
<div class="pp-col-1-2 pl-col-1-3 tp-col-1-4 tl-col-1-5 dt-col-1-6 hd-col-1-7"></div>
<!-- <div style="clear:both; class="colymn-clearfix"></div>-->    <!-- pp and tl -->
<div class="pp-col-1-2 pl-col-1-3 tp-col-1-4 tl-col-1-5 dt-col-1-6 hd-col-1-7"></div>
<div class="pp-col-1-2 pl-col-1-3 tp-col-1-4 tl-col-1-5 dt-col-1-6 hd-col-1-7"></div>
<!-- <div style="clear:both; class="colymn-clearfix"></div>-->    <!-- pp, pl, tp and dt -->
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

* choose one of the prefixes `xx`, `pp`, `pl`, `tp`, `tl`, `dt` or `hd` for that viewport
* classes `left`, `right` and `offset` must be accompanied with a `col` class to specify width.

___

####Questions

>Can I mix my column sizes?

>Yes, you can use a mixture of wierd and wonderful fractions such as;

```html
<div class="dt-col-1-6">...</div>
<div class="dt-col-2-18">...</div>
<div class="dt-col-2-14">...</div>
<div class="dt-col-3-10">...</div>
<div class="dt-col-3-20">...</div>
<div class="dt-col-4-31">...</div>
```

Just so long as they all add up to 1


___
####version

######1.4
* added options

######1.3
* added fixed width containers

######1.2
* bugfix - excluded svg elements

######1.1
* initial release
* inherited from epicGrid


