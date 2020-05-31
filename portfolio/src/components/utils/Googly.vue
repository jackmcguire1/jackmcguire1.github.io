/* eslint-disable no-unused-vars */ /* eslint-disable no-unused-vars */ /*
eslint-disable no-unused-vars */ /* eslint-disable no-unused-vars */
<template>
  <div class="Googly">
    <div class="col-xs-12 text-center" id="gopher">
      <b-img :src="imgSrc" alt="Go mascot" width="336" id="mascot"></b-img>
      <div class="mascoteyes hidden-xs">
        <div class="eyeball" id="ebleft">
          <div class="iris"><div class="highlight"></div></div>
        </div>
        <div class="eyeball" id="ebright">
          <div class="iris"><div class="highlight"></div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gopher from "@/assets/go-mascot.svg";

import $ from "jquery";
// eslint-disable-next-line no-unused-vars
import jQuery from "jquery";
// eslint-disable-next-line no-unused-vars
import xeyes from "@/assets/js/jquery-xeyes-2.0.min.js";

export default {
  name: "Googly",
  mounted() {
    /**
	jQuery xeyes    
  @version 2.0
	@author  Felix Milea-Ciobanu
	@repo    https://github.com/felixmc/jQuery-xeyes
  */
    (function(e) {
      var b = {
        padding: 0,
        reset: false,
        radius: "natural",
        position: "center",
        trigger: window,
      };
      var a = {
        top: 90,
        bottom: -90,
        left: 180,
        right: 0,
        topRight: 45,
        topLeft: 135,
        bottomRight: -45,
        bottomLeft: -135,
      };
      function c(f) {
        this.$iris = f;
        f.css("position", "absolute");
        this.width = f.outerWidth();
        this.height = f.outerHeight();
        this.resetOffset = function() {
          var g = f.offset();
          this.offset = {
            x: g.left + this.width / 2 - parseInt(f.css("left")),
            y: g.top + this.height / 2 - parseInt(f.css("top")),
          };
        };
      }
      function d(g, f) {
        this.$eye = g;
        g.css("position", "relative");
        this.width = g.width();
        this.height = g.height();
        this.iris = new c(f);
        this.pos = {
          x: (this.width - this.iris.width) / 2,
          y: (this.height - this.iris.height) / 2,
        };
        f.css("left", this.pos.x + "px").css("top", this.pos.y + "px");
        this.padding = 0;
      }
      d.prototype.follow = function(g) {
        g.x = g.x - this.pos.x;
        g.y = g.y - this.pos.y;
        this.iris.resetOffset();
        var j = Math.atan(
            (g.y - this.iris.offset.y) / (g.x - this.iris.offset.x)
          ),
          i = this.iris.offset.x > g.x ? -1 : 1,
          k =
            Math.cos(j) *
            ((this.width - this.iris.width) / 2 - this.padding) *
            i,
          h =
            Math.sin(j) *
            ((this.height - this.iris.height) / 2 - this.padding) *
            i,
          f = Math.sqrt(Math.pow(k, 2) + Math.pow(h, 2)),
          l = Math.sqrt(
            Math.pow(g.y - this.iris.offset.y, 2) +
              Math.pow(g.x - this.iris.offset.x, 2)
          );
        if (f > l) {
          this.iris.$iris
            .css("left", g.x - this.iris.offset.x + this.pos.x + "px")
            .css("top", g.y - this.iris.offset.y + this.pos.y + "px");
        } else {
          this.iris.$iris
            .css("left", this.pos.x + k + "px")
            .css("top", this.pos.y + h + "px");
        }
      };
      d.prototype.setPosition = function(f) {
        if (f.x !== undefined && f.y !== undefined) {
          this.iris.$iris
            .css("left", this.pos.x - f.x + "px")
            .css("top", this.pos.y - f.y + "px");
        } else {
          if (typeof f === "number") {
            var h = (f * Math.PI) / -180;
            this.iris.$iris
              .css(
                "left",
                this.pos.x +
                  Math.cos(h) *
                    (this.width / 2 - this.iris.width / 2 - this.padding) +
                  "px"
              )
              .css(
                "top",
                this.pos.y +
                  Math.sin(h) *
                    (this.height / 2 - this.iris.height / 2 - this.padding) +
                  "px"
              );
          } else {
            if (f === "center") {
              this.iris.$iris
                .css("left", this.pos.x + "px")
                .css("top", this.pos.y + "px");
            } else {
              if (a[f] !== undefined) {
                var g = (a[f] * Math.PI) / -180;
                this.iris.$iris
                  .css(
                    "left",
                    this.pos.x +
                      Math.cos(g) *
                        (this.width / 2 - this.iris.width / 2 - this.padding) +
                      "px"
                  )
                  .css(
                    "top",
                    this.pos.y +
                      Math.sin(g) *
                        (this.height / 2 -
                          this.iris.height / 2 -
                          this.padding) +
                      "px"
                  );
              }
            }
          }
        }
      };
      e.fn.xeyes = function(g) {
        g = e.extend(b, g);
        var h = parseInt(g.padding, 10);
        var f = e(g.trigger);
        this.each(function(m, j) {
          var k = e(j),
            l = k.parent();
          var i = new d(l, k);
          i.padding = h;
          if (g.radius == "circular" && i.width > i.height) {
            i.width = i.height;
          } else {
            if (g.radius == "circular") {
              i.height = i.width;
            }
          }
          i.setPosition(g.position);
          f.mousemove(function(n) {
            i.follow({ x: n.pageX, y: n.pageY });
          });
          if (g.reset) {
            // eslint-disable-next-line no-unused-vars
            f.mouseleave(function(n) {
              i.setPosition(g.position);
            });
          }
        });
      };
    })(jQuery);
    $(".iris").xeyes();
  },
  props: {
    title: String,
  },
  data() {
    return {
      imgSrc: Gopher,
    };
  },
};
</script>

<style>
.mascoteyes {
  position: relative;
  /* margin-top: 0px; */
  bottom: 425px;
  top: -400;
  margin-right: 30px;
  top: -410;
  top: -410;
}

.eyeball {
  width: 78px;
  height: 72px;
  background: #fff;
  border-radius: 50%;
  display: inline-block;
}

.eyeball .iris {
  width: 28px;
  height: 30px;
  background: #000;
  border-radius: 50%;
}
.eyeball .iris .highlight {
  width: 9px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  bottom: 9px;
  right: 5px;
}
.eyeball#ebleft {
  left: -5px;
}
.eyeball#ebright {
  right: -20px;
  top: -2px;
}
/* 
@media (max-width: 767px) {
  #mascot {
    top: 1000px;
  }
}
@media (max-width: 1199px) {
  .mascoteyes {
    bottom: -95px;
  }
}
@media (max-width: 991px) {
  .mascoteyes {
    bottom: 100px;
  }
} */
</style>
