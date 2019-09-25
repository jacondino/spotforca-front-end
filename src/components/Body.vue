<template>
  <div class="hello">
    <svg width="580" height="400" xmlns="http://www.w3.org/2000/svg">
        <g>
          <title>Layer 1</title>
          <line stroke-linecap="null" stroke-linejoin="null" id="svg_5" y2="318.453125" x2="398.5" y1="318.453125" x1="68.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#fff" fill="none"/>
          <line stroke="#fff" stroke-linecap="null" stroke-linejoin="null" id="svg_7" y2="84.171934" x2="69.762551" y1="318.583432" x1="69.15649" fill-opacity="null" stroke-opacity="null" stroke-width="3" fill="none"/>
          <line stroke="#fff" stroke-linecap="null" stroke-linejoin="null" id="svg_9" y2="82.564103" x2="249.230769" y1="85.128205" x1="69.838992" fill-opacity="null" stroke-opacity="null" stroke-width="3" fill="none"/>
          <ellipse v-if="error>1" ry="20.25641" rx="20.25641" id="svg_10" cy="114.800237" cx="248.837211" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#fff" fill="none"/>
          <line stroke="#fff" stroke-linecap="null" stroke-linejoin="null" id="svg_12" y2="93.953302" x2="248.836746" y1="82.325417" x1="248.604189" fill-opacity="null" stroke-opacity="null" stroke-width="3" fill="none"/>
          <line v-if="error>2" stroke-linecap="null" stroke-linejoin="null" id="svg_14" y2="179.565217" x2="248.695652" y1="135.652174" x1="248.695652" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#fff" fill="none"/>
          <line v-if="error>3" stroke-linecap="null" stroke-linejoin="null" id="svg_16" y2="175.652174" x2="274.782609" y1="142.608696" x1="248.695652" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#fff" fill="none"/>
          <line v-if="error>4" stroke-linecap="null" stroke-linejoin="null" id="svg_17" y2="175.217391" x2="219.565217" y1="143.478261" x1="247.826087" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#fff" fill="none"/>
          <line v-if="error>5" stroke-linecap="null" stroke-linejoin="null" id="svg_18" y2="215.652174" x2="268.26087" y1="178.26087" x1="249.130435" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#fff" fill="none"/>
          <line v-if="error>6" stroke-linecap="null" stroke-linejoin="null" id="svg_19" y2="216.086957" x2="228.695652" y1="178.26087" x1="248.26087" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#fff" fill="none"/>
          <line stroke-linecap="null" stroke-linejoin="null" id="svg_20" y2="85.217391" x2="100.434783" y1="117.826087" x1="68.695652" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#fff" fill="none"/>
        </g>
      </svg>
  </div>
</template>

<script>
export default {
  name: 'Body',
  props: {
    error: Number,
  },
};
</script>
