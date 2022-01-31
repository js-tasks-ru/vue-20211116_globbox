<template>
  <div class="image-uploader">
    <label
      class="image-uploader__preview"
      :class="{ 'image-uploader__preview-loading': loading }"
      :style="currentPreview && { '--bg-url': `url(${currentPreview})` }"
      @click="imageClick"
    >
      <span class="image-uploader__text">{{ currentUploadText }}</span>
      <input
        ref="input"
        type="file"
        accept="image/*"
        class="image-uploader__input"
        v-bind="$attrs"
        @change="changeImage"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'UiImageUploader',
  inheritAttrs: false,
  props: {
    preview: {
      type: String,
    },
    uploader: {
      type: Function,
    },
  },
  emits: [
    'select',
    'upload',
    'remove',
    'error'
  ],
  data() {
    return {
      currentPreview: this.preview,
      previewToRevoke: false,
      loading: false,
    };
  },
  computed: {
    currentState() {
      if (this.loading) return 'loading';
      if (this.currentPreview) return 'preview';
      return 'empty';
    },
    currentUploadText() {
      const uploaderStateTexts = {
        loading: 'Загрузка...',
        preview: 'Удалить изображение',
        empty: 'Загрузить изображение',
      };
      return uploaderStateTexts[this.currentState];
    },
  },
  unmounted() {
    this.previewRevoke();
  },
  methods: {
    changeImage($event) {
      this.previewRevoke();
      const file = $event.target.files[0];
      this.$emit('select', file);
      if (this.uploader) {
        this.upload(file);
      } else {
        this.createPreview(file);
      }
    },
    imageClick($event) {
      if (this.currentState === 'preview') {
        $event.preventDefault();
        this.delete();
        this.$emit('remove');
      }
    },
    upload(file) {
      this.loading = true;
      this.uploader(file)
        .then((response) => {
          this.loading = false;
          this.currentPreview = response.image;
          this.$emit('upload', response);
        })
        .catch((error) => {
          this.delete();
          this.loading = false;
          this.$emit('error', error);
        });
    },
    delete() {
      this.currentPreview = null;
      this.$refs.input.value = null;
    },
    createPreview(file) {
      this.currentPreview = URL.createObjectURL(file);
      this.previewToRevoke = true;
    },
    previewRevoke() {
      if (this.previewToRevoke) {
        URL.revokeObjectURL(this.currentPreview);
      }
      this.previewToRevoke = false;
    },
  },
};
</script>

<style scoped>
.image-uploader {
}

.image-uploader__input {
  opacity: 0;
  height: 0;
}

.image-uploader__preview {
  --bg-url: var(--default-cover);
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), var(--bg-url);
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  transition: 0.2s border-color;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 512px;
  height: 228px;
}

.image-uploader__text {
  color: var(--white);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

.image-uploader__preview:hover {
  border-color: var(--blue);
}

.image-uploader__preview.image-uploader__preview-loading {
  cursor: no-drop;
}
</style>
