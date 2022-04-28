export default ({ app }, inject) => {
    // Static assets paths 
    const paths = {
        img: '/assets/img/',
        svg: '/assets/svg/',
        svgIcons: '/assets/svg/icons/',
    }
    inject('paths', paths)

    // Delay function
    const delay = (fn, ms) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(fn())
            }, ms)
        })
    }
    inject('delay', delay)

    // Log function
    const log = (msg) => {
        console.log(msg)
    }
    inject('log', log)

    // Slugify
    const slugify = (str) => {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();
    
        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to   = "aaaaeeeeiiiioooouuuunc------";
        for (var i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    }
    inject('slugify', slugify)
  }