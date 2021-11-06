'use strict';
(self.webpackChunkantd_form_render_demo = self.webpackChunkantd_form_render_demo || []).push([
  [826],
  {
    2188: (e, t, n) => {
      var r = n(7294),
        l = n(3935),
        a = n(9439),
        o = n(9163),
        c = n(3475),
        i = n(7416),
        u = n(8365),
        m = n(9650),
        p = n(8222),
        s = n(4210),
        d = n(9509),
        y = o.ZP.div.withConfig({
          displayName: 'OneCol__StyledOneRow',
          componentId: 'sc-czpdjs-0',
        })(['width:400px;']);
      const Z = function () {
        var e = i.Z.useForm(),
          t = (0, a.Z)(e, 1)[0],
          n = [
            {
              type: u.Z,
              label: '手机号',
              placeholder: '请输入',
              name: 'tel',
              elProps: { maxLength: 11 },
              itemProps: {
                rules: [
                  { required: !0, message: '请输入' },
                  { pattern: /^1\d{10}$/, message: '手机号必须为11位数字' },
                ],
              },
            },
            {
              type: u.Z.Password,
              label: '密码',
              placeholder: '请输入',
              name: 'pwd',
              itemProps: { rules: [{ required: !0, message: '请输入' }] },
            },
            {
              type: u.Z.Password,
              label: '确认密码',
              placeholder: '请输入',
              name: 'confirmPwd',
              itemProps: {
                rules: [
                  { required: !0, message: '请输入' },
                  function (e) {
                    var t = e.getFieldValue;
                    return {
                      validator: function (e, n) {
                        return n && t('pwd') !== n
                          ? Promise.reject(new Error('两次密码不一致'))
                          : Promise.resolve();
                      },
                    };
                  },
                ],
              },
            },
            {
              type: u.Z.TextArea,
              name: 'desc',
              label: '简介',
              elProps: { placeholder: '个人简介', rows: 4 },
            },
            {
              render: function () {
                return r.createElement(
                  i.Z.Item,
                  { wrapperCol: { offset: 6 } },
                  r.createElement(
                    m.Z,
                    null,
                    r.createElement(p.Z, { htmlType: 'submit', type: 'primary' }, '确定'),
                    r.createElement(p.Z, { htmlType: 'reset' }, '重置')
                  )
                );
              },
            },
          ];
        return r.createElement(
          y,
          null,
          r.createElement(
            i.Z,
            {
              form: t,
              labelCol: { span: 6 },
              onFinish: function (e) {
                s.ZP.success(JSON.stringify(e));
              },
            },
            r.createElement(d.Z, { layoutData: n })
          )
        );
      };
      var f = n(4942),
        E = n(5627);
      function P(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                (0, f.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var v = o.ZP.div.withConfig({
          displayName: 'OneColWithDynamicControl__StyledOneRow',
          componentId: 'sc-1jrbmzn-0',
        })(['width:600px;']),
        h = o.ZP.p.withConfig({
          displayName: 'OneColWithDynamicControl__StyledP',
          componentId: 'sc-1jrbmzn-1',
        })(['padding:10px;']);
      const g = function () {
        var e = i.Z.useForm(),
          t = (0, a.Z)(e, 1)[0],
          n = i.Z.useForm(),
          l = (0, a.Z)(n, 1)[0],
          o = (0, r.useState)({}),
          c = (0, a.Z)(o, 2),
          u = c[0],
          m = c[1],
          y = [
            {
              type: E.ZP.Group,
              label: '性别',
              name: 'gender',
              elProps: {
                options: [
                  { label: '男', value: '男生' },
                  { label: '女', value: '女生' },
                ],
              },
            },
            { type: 'div', label: '你是', elProps: { children: u.gender || '未选择' } },
            {
              type: p.Z,
              elProps: { htmlType: 'submit', type: 'primary', children: '确定' },
              itemProps: { wrapperCol: { offset: 6 } },
            },
          ],
          Z = [
            {
              type: E.ZP.Group,
              label: '性别',
              name: 'gender',
              elProps: {
                options: [
                  { label: '男', value: '男生' },
                  { label: '女', value: '女生' },
                ],
              },
            },
            {
              render: function () {
                return r.createElement(
                  i.Z.Item,
                  { label: '你是', dependencies: ['gender'] },
                  function () {
                    return l.getFieldValue('gender') || '未选择';
                  }
                );
              },
            },
            {
              type: p.Z,
              elProps: { htmlType: 'submit', type: 'primary', children: '确定' },
              itemProps: { wrapperCol: { offset: 6 } },
            },
          ];
        return r.createElement(
          v,
          null,
          r.createElement(
            h,
            null,
            '1.定义onValuesChange 同步状态到state , 触发重新渲染实现表单联动'
          ),
          r.createElement(
            i.Z,
            {
              form: t,
              onValuesChange: function (e) {
                m(function (t) {
                  return b(b({}, t), e);
                });
              },
              labelCol: { span: 6 },
              onFinish: function (e) {
                s.ZP.success(JSON.stringify(e));
              },
            },
            r.createElement(d.Z, { layoutData: y })
          ),
          r.createElement(h, null, '2.利用Form.Item dependencies 和自定义render 实现表单联动'),
          r.createElement(
            i.Z,
            {
              form: l,
              labelCol: { span: 6 },
              onFinish: function (e) {
                s.ZP.success(JSON.stringify(e));
              },
            },
            r.createElement(d.Z, { layoutData: Z })
          )
        );
      };
      var w = o.ZP.div.withConfig({
        displayName: 'MultipleCols__StyledOneRow',
        componentId: 'sc-110p8tq-0',
      })(['width:800px;']);
      const O = function () {
        for (
          var e = [], t = (0, r.useState)(4), n = (0, a.Z)(t, 2), l = n[0], o = n[1], c = 0;
          c < 11;
          c++
        )
          e.push({
            type: u.Z,
            label: '输入框'.concat(c + 1),
            placeholder: '请输入',
            name: 'name'.concat(c),
          });
        return r.createElement(
          w,
          null,
          r.createElement(
            i.Z,
            { layout: 'vertical' },
            r.createElement(
              'div',
              { style: { margin: '16px 0' } },
              r.createElement(
                E.ZP.Group,
                {
                  onChange: function (e) {
                    return o(Number(e.target.value));
                  },
                  optionType: 'button',
                  value: l,
                },
                r.createElement(E.ZP, { value: 1 }, '1行1列'),
                r.createElement(E.ZP, { value: 2 }, '1行2列'),
                r.createElement(E.ZP, { value: 3 }, '1行3列'),
                r.createElement(E.ZP, { value: 4 }, '1行4列')
              )
            ),
            r.createElement(d.Z, { layoutData: e, cols: l })
          )
        );
      };
      var C = o.ZP.div.withConfig({
        displayName: 'SpaceLayout__StyledOneRow',
        componentId: 'sc-ojv94d-0',
      })(['width:1000px;']);
      const _ = function () {
        for (
          var e = [], t = (0, r.useState)(8), n = (0, a.Z)(t, 2), l = n[0], o = n[1], c = 0;
          c < 3;
          c++
        )
          e.push({
            type: u.Z,
            label: '输入框'.concat(c + 1),
            placeholder: '请输入',
            name: 'name'.concat(c),
          });
        return r.createElement(
          C,
          null,
          r.createElement(
            i.Z,
            { layout: 'horizontal' },
            r.createElement(
              'div',
              { style: { margin: '16px 0' } },
              r.createElement(
                E.ZP.Group,
                {
                  onChange: function (e) {
                    return o(Number(e.target.value));
                  },
                  optionType: 'button',
                  value: l,
                },
                r.createElement(E.ZP, { value: 8 }, '8px'),
                r.createElement(E.ZP, { value: 16 }, '16px'),
                r.createElement(E.ZP, { value: 24 }, '24px'),
                r.createElement(E.ZP, { value: 32 }, '32px')
              )
            ),
            r.createElement(d.O, { layoutData: e, size: l })
          )
        );
      };
      var j = c.Z.TabPane,
        S = o.ZP.div.withConfig({
          displayName: 'App__StyledContainer',
          componentId: 'sc-82w0ae-0',
        })(['padding:20px;']);
      const x = function () {
        var e = (0, r.useState)('1'),
          t = (0, a.Z)(e, 2),
          n = t[0],
          l = t[1];
        return r.createElement(
          S,
          null,
          r.createElement(
            c.Z,
            { defaultActiveKey: '1', activeKey: n, onChange: l },
            r.createElement(j, { tab: '一行一列', key: '1' }, r.createElement(Z, null)),
            r.createElement(j, { tab: '表单联动', key: '2' }, r.createElement(g, null)),
            r.createElement(j, { tab: '一行多列', key: '3' }, r.createElement(O, null)),
            r.createElement(j, { tab: '等间距排列', key: '4' }, r.createElement(_, null))
          )
        );
      };
      l.render(r.createElement(x, null), document.getElementById('root'));
    },
  },
  (e) => {
    e.O(0, [736], () => (2188, e((e.s = 2188)))), e.O();
  },
]);
