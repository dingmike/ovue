<template>
  <el-cascader :options="dic"
               v-model="text"
               :placeholder="placeholder"
               :props="allProps"
               :size="size"
               :emit-path="emitPath"
               :change-on-select="changeOnSelect"
               :clearable="disabled?false:clearable"
               :expand-trigger="expandTrigger"
               :show-all-levels="showAllLevels"
               :filterable="filterable"
               :separator="separator"
               :disabled="disabled"
               :collapse-tags="tags"
               @click.native="handleClick">
    <template slot-scope="{ node, data }"
              v-if="typeslot">
      <slot :name="prop+'Type'"
            :data="data"
            :node="node"></slot>
    </template>
  </el-cascader>
</template>

<script>
import create from "core/create";
import props from "../../core/common/props.js";
import event from "../../core/common/event.js";
export default create({
  name: "cascader",
  mixins: [props(), event()],
  props: {
    checkStrictly: {
      type: Boolean,
      default: false
    },
    emitPath: {
      type: Boolean,
      default: true
    },
    tags: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      default: () => []
    },
    changeOnSelect: {
      type: Boolean,
      default: false
    },
    expandTrigger: {
      type: String,
      default: "hover"
    },
    showAllLevels: {
      type: Boolean,
      default: true
    },
    lazy: {
      type: Boolean,
      default: false
    },
    lazyLoad: Function,
    filterable: {
      type: Boolean,
      default: false
    },
    expandTrigger: {
      type: String,
      default: 'click'
    },
    separator: {
      type: String,
      default: "/"
    }
  },
  data () {
    return {};
  },
  watch: {},
  computed: {
    allProps () {
      return {
        label: this.labelKey,
        value: this.valueKey,
        children: this.childrenKey,
        checkStrictly: this.checkStrictly,
        multiple: this.multiple,
        lazy: this.lazy,
        lazyLoad: this.lazyLoad,
        expandTrigger: this.expandTrigger
      }
    }
  },
  created () { },
  mounted () { },
  methods: {
  }
});
</script>
