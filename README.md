This is a way that you can add a slide show to your website without writing
much javascript. Just clone the repository and add the slider.js to your project.


Then you can add a script tag to a javascript file or just do it in your html.
```
<script>
  const slider = new Slider(
    document.getElementById('parent'), [
      {src: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/6990634-panda-hug.jpg',
        width: 100,
        height: 100},
      {src: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Panda_Cub_from_Wolong%2C_Sichuan%2C_China.JPG',
        width: 100,
        height: 100},
      {src: 'https://c1.staticflickr.com/9/8018/7708851288_c078cbd16e_b.jpg',
        width: 100,
        height: 100},
      {src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        width: 500,
        height: 250}
    ])
  slider.render()
</script>
```
First add a new slider.
`const slider = new Slider()`
The slider takes to arguments the first is the container that you want to be the
parent and the second is a array of object that give info about the images you
want to show. Each object is an image the first property should be the source for the
image and then there should be a property's for the width and the height of the image.
```
{
  src: 'myImage.png',
  width: 600,
  height: 400
}
```
That should be all you need. The next step to render the slider is to simply call.
```
slider.render()
```
This is useful if you don't want the slider to show all the time
when the slider shows it will not have any styles so you can style it with
these id's.
```
#rightButton
#leftButton
#slideFrame
#slideImg
```

example:

```
#rightButton { border: 5px solid black; float: right}
#leftButton { border: 5px solid red; float: left}
#slideFrame {border: 10px solid green; margin: 10px}
#slideImg {border: 10px solid purple;}
```

:)
