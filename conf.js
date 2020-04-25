const MODE = 'FEU_TRICOLORE';
const MODES = [
  'TEST',
  'RANDOM',
  'LOOKING_BACK_THROUGH_SPACE',
  'GALACTIC_CLOUD',
  'SIMPLE',
  'FLOW',
  'FEU_TRICOLORE'
];

const CONF = {};
CONF.LOG_FPS = false;
CONF.COLOR_COUNT = 2;
CONF.INIT_WITH_MASK = true;
CONF.LOOP_WITH_MASK = false;
CONF.FLASH_REMOVER = '2.0';
CONF.INVERT = false;
CONF.MODULO_RGB = false;
CONF.R_MAX_START_RATIO = 0.05;
CONF.UP_RATE = 1.01;
CONF.DOWN_RATE = 0.99;
CONF.COLOR_MODES = ['WHITE', 'BLACK_OR_WHITE', 'SHADES_OF_GREY', 'RAINBOW', 'COLORFULL', 'SILVER_N_GOLD', 'RANDOM', 'LIST'];
CONF.COLOR_MODE = 'WHITE';
CONF.COLORS = [];
CONF.MIN_SATURATION = 0;
CONF.SATURATE_ON_LOOP = false;
CONF.ZOOM = true;
CONF.ZOOM_RATE = 0;
CONF.ZOOM_RATES = [-1, 0, 20];
CONF.GENERATION_PER_CYCLE = 10;
CONF.DO_CHECK = true;
CONF.NO_REDO = false;
CONF.MAX_COLOR_UNDER = 1;
CONF.MARGIN = 1;
CONF.PAINT_TRANSPARENT = true;
CONF.FINAL_MULTIPLIER = '1.0';
CONF.RGB_TO_ADD = '0.0';
CONF.SPREAD = '0.1';

switch (MODE) {
  case 'TEST':
    break;
  case 'FEU_TRICOLORE':
    CONF.COLOR_MODE = 'LIST';
    CONF.COLORS = [
      [1, 1, 0],
      [1, 0.5, 0],
      [0.5, 0, 0],
    ]
    CONF.MAX_COLOR_UNDER = 1;
    CONF.PAINT_TRANSPARENT = true;
    CONF.LOOP_WITH_MASK = true;
    CONF.MIN_SATURATION = 1.0;
    CONF.GENERATION_PER_CYCLE = 1000;
    CONF.MODULO_RGB = false;
    CONF.INVERT = false;
    CONF.SPREAD = 0.4;
    CONF.ZOOM_RATE = 0;
    break;
  case 'FLOW':
    CONF.ZOOM_RATE = -2;
    CONF.COLOR_MODE = 'COLORFULL';
    CONF.COLOR_COUNT = 2;
    CONF.MAX_COLOR_UNDER = 10;
    CONF.SATURATE_ON_LOOP = false;
    CONF.PAINT_TRANSPARENT = false;
    CONF.LOOP_WITH_MASK = true;
    CONF.FINAL_MULTIPLIER = 1.02;
    CONF.MIN_SATURATION = 0.0;
    CONF.GENERATION_PER_CYCLE = 100;
    CONF.MODULO_RGB = false;
    CONF.INVERT = false;
    CONF.FLASH_REMOVER = 0.9;
    break;
  case 'SIMPLE':
    CONF.INIT_WITH_MASK = true;
    CONF.LOOP_WITH_MASK = false;
    CONF.MARGIN = 1;
    CONF.COLOR_MODE = 'WHITE';
    CONF.ZOOM = false;
    CONF.GENERATION_PER_CYCLE = 100;
    CONF.SATURATE_ON_LOOP = false;
    break;
  case 'LOOKING_BACK_THROUGH_SPACE':
    CONF.COLOR_MODE = 'COLORFULL';
    CONF.COLOR_COUNT = 100;
    CONF.NO_REDO = true;
    CONF.INIT_WITH_MASK = true;
    CONF.LOOP_WITH_MASK = true;
    CONF.MARGIN = 1;
    CONF.GENERATION_PER_CYCLE = 100;
    CONF.SATURATE_ON_LOOP = false;
    CONF.ZOOM_RATE = -1;
    break;
  case 'GALACTIC_CLOUD':
    CONF.ZOOM_RATE = -1;
    CONF.COLOR_MODE = 'RAINBOW';
    CONF.MAX_COLOR_UNDER = 1;
    CONF.SATURATE_ON_LOOP = true;
    CONF.PAINT_TRANSPARENT = true;
    break;
  case 'RANDOM':
    CONF.INIT_WITH_MASK = true;
    CONF.LOOP_WITH_MASK = true;
    CONF.ZOOM_RATE = ZOOM_RATES[Math.floor(Math.random() * CONF.ZOOM_RATES.length)];
    CONF.COLOR_MODE = COLOR_MODES[Math.floor(Math.random() * CONF.COLOR_MODES.length)];
    break;
}

console.log(CONF);
console.log('CONF: ' + JSON.stringify(CONF, null, 2));
