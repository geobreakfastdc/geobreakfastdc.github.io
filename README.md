# Geobreakfast DC

![breakfast gif](https://umad.com/img/2015/8/breakfast-gif-9887-10285-hd-wallpapers.jpg)

### Recomendded Breakfast Places

#### Downtown

- [Lincoln's Waffle Shop](http://www.lincolnswaffleshop.com/)
- [National Press Club](https://www.press.org/)
- [Jimmy T's](https://www.google.com/search?q=JT%27s+DC&oq=JT%27s+DC&aqs=chrome..69i57l2j69i60l3j69i61.1595j0j1&sourceid=chrome&ie=UTF-8#tbm=lcl&q=Jimmy+T's+place+dc&rlfi=hd:;si:1316705882686821911;mv:!1m3!1d275.97766929858636!2d-76.9992943!3d38.889518699999996!2m3!1f0!2f0!3f0!3m2!1i807!2i546!4f13.1)

#### Uptown

- [Big Bear Cafe](http://www.bigbearcafe-dc.com/)
- [The Coupe](http://www.thecoupedc.com/)
- [Slim's Diner](http://www.slimsdiner.com/)

### Adding an event

_You'll need a Github account to make edits to the website & permission to edit this repo._

1. Determine where we're gonna eat breakfast!

2. Grab the [latitude & longitude](http://www.latlong.net/) values for wherever the new location is.

3. Copy & paste those values in [main.js, line 4](https://github.com/geobreakfastdc/geobreakfastdc.github.io/blob/master/assets/scripts/main.js#L4-L5)  for the `breakfastCoor` constant.

4. If the value for `isUpcoming` is set to `false`, change it to `true`.

5. To set the address, open [index.html](https://github.com/geobreakfastdc/geobreakfastdc.github.io/blob/master/index.html#L49-L69) and enter the upcoming date,time, restaruant name, & address.

Once those changes are made, feel free to commit the changes and voila! You're good to go.

### Removing events

1. Switch the `isUpcoming` value to false in main.js.

2. Remove text for the Day, Time, & Address values in index.html

3. Also in index.html, under the `place` element, just write something along the lines of 'Undetermined! Stay tuned.'

### Editing the CSS

CSS for this site is written initially in [Sass](http://sass-lang.com/). To learn how to use it and convert the scss file into css, you can read [instructions here.](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

If you already have Sass installed on your computer, you'll just need to navigate to the styles folder in your terminal & run

`sass -watch main.scss`
