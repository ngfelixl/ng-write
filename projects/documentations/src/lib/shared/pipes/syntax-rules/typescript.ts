import { colors } from './colors';
import { SyntaxConfig } from '../../../models/syntax-config';

export const typescript: SyntaxConfig = {
  lang: 'typescript',
  keywords: {
    from: colors.purple,
    import: colors.purple,
    export: colors.purple,
    return: colors.purple,
    for: colors.purple,
    if: colors.purple,
    else: colors.purple,
    while: colors.purple,
    try: colors.purple,
    catch: colors.purple,
    function: colors.blue,
    class: colors.blue,
    interface: colors.blue,
    private: colors.blue,
    public: colors.blue,
    imports: colors.blue,
    const: colors.blue,
    let: colors.blue,
    var: colors.blue,
    constructor: colors.blue,
    implements: colors.blue,
    extends: colors.blue
  },
  strings: colors.red,
  comments: colors.grey,
  decorators: colors.yellow
};
