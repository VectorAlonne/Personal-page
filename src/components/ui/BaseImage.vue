<template> 
    <div
      :style="{
        'background-image': `url(${(image)})`,
        width: '300px',
        height: '300px',
      }"
    ></div>
</template>

<script>
export default {
  name: "BaseImage",
  data() {
    return {
      image: "img/BaseImage.jpg",
    };
  },
};
</script>