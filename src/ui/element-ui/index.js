import Affix from 'components/affix';
import CountUp from 'components/count-up';
import Avatar from 'components/avatar';
import Article from 'components/article';
import Carousel from 'components/carousel';
import Crud from 'components/crud';
import Card from 'components/card';
import Code from 'components/code';
import Color from 'components/color';
import Chat from 'components/chat';
import Comment from 'components/comment';
import Form from 'components/form';
import Checkbox from 'components/checkbox';
import Date from 'components/date';
import Draggable from 'components/draggable';
import Empty from 'components/empty';
import Flow from 'components/flow';
import Notice from 'components/notice';
import License from 'components/license';
import Progress from 'components/progress';
import Time from 'components/time';
import Input from 'components/input';
import Radio from 'components/radio';
import Select from 'components/select';
import Cascader from 'components/cascader';
import InputNumber from 'components/input-number';
import InputTree from 'components/input-tree';
import InputTable from 'components/input-table';
import Verifys from 'components/verify';
import Switchs from 'components/switch';
import Rate from 'components/rate';
import Upload from 'components/upload';
import Sign from 'components/sign';
import Slider from 'components/slider';
import Keyboard from 'components/keyboard';
import Group from 'components/group';
import Tree from 'components/tree';
import Search from 'components/search';
import Skeleton from 'components/skeleton';
import Tabs from 'components/tabs';
import Dynamic from 'components/dynamic';
import Queue from 'components/queue';
import IconSelect from 'components/icon-select';
import Video from 'components/video';
import Login from 'components/login';
import Arrays from 'components/array';
import textEllipsis from 'components/text-ellipsis';
import packages from 'core/packages';
if (!window.Element) {
  packages.logs('element-ui');
}
import AvueData from '../data/';
import AvueEchart from '../echart/';
export default [
  Arrays,
  Affix,
  Avatar,
  Article,
  Carousel,
  Crud,
  Code,
  Color,
  Card,
  Chat,
  Comment,
  Form,
  Checkbox,
  Date,
  CountUp,
  Draggable,
  Empty,
  Flow,
  Notice,
  License,
  Progress,
  Time,
  Input,
  Radio,
  Select,
  Cascader,
  InputNumber,
  InputTree,
  InputTable,
  Switchs,
  Rate,
  Upload,
  Slider,
  Keyboard,
  Group,
  Tree,
  Search,
  Tabs,
  Queue,
  Dynamic,
  Video,
  Verifys,
  IconSelect,
  textEllipsis,
  Skeleton,
  Sign,
  Login,
  ...AvueData,
  ...AvueEchart
];
