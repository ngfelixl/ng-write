import { colors } from './colors';
import { SyntaxConfig } from '../../../models/syntax-config';

export const cpp: SyntaxConfig = {
  lang: 'cpp',
  keywords: {
    include: colors.purple,
    return: colors.purple,
    if: colors.purple,
    else: colors.purple,
    while: colors.purple,
    try: colors.purple,
    catch: colors.purple,
    function: colors.blue,
    class: colors.blue,
    constructor: colors.blue,
    implements: colors.blue,
    extends: colors.blue,

    int: colors.blue,
    bool: colors.blue,
    long: colors.blue,
    double: colors.blue,
    String: colors.blue,
    char: colors.blue,

    uint8_t: colors.green,
    uint16_t: colors.green,
    uint32_t: colors.green,
    uint64_t: colors.green,
    int8_t: colors.green,
    int16_t: colors.green,
    int32_t: colors.green,
    int64_t: colors.green
  },
  strings: colors.red,
  comments: colors.grey
};
