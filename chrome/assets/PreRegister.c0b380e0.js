var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { S as SvelteComponent, i as init, s as safe_not_equal, h as element, M as set_style, j as insert, x as noop, l as detach, N as create_slot, g as space, w as attr, O as toggle_class, Q as append, R as listen, T as update_slot_base, U as get_all_dirty_from_scope, Y as get_slot_changes, t as transition_in, Z as group_outros, a as transition_out, _ as check_outros, $ as run_all, b as component_subscribe, a0 as yw_nav_visible, a1 as yw_blur, a2 as compute_slots, a3 as getContext, a4 as createEventDispatcher, a5 as onMount, r as set_store_value, a6 as bubble, e as binding_callbacks, a7 as src_url_equal, v as text, a8 as set_data, a9 as create_out_transition, aa as yw_search, ab as yw_cancel_search, ac as yw_thread, ad as yw_menu_vendor, ae as yw_overlay_network, af as yw_chain, ag as yw_chain_ref, ah as yw_overlay_account, ai as yw_account, y as yw_account_ref, aj as empty, ak as assign, al as PfpDisplay, c as create_component, m as mount_component, am as get_spread_update, an as get_spread_object, d as destroy_component, f as bind, k as add_flush_callback, ao as Close, ap as set_input_value, D as qs, aq as handle_promise, ar as Chains, as as update_await_block_branch, u as Accounts, at as destroy_each, au as Row, A as ActionsLine, av as acceptable, aw as Field, ax as NL_PASSPHRASE_MINIMUM, ay as NL_PASSPHRASE_MAXIMUM, V as Vault, az as ATU8_DUMMY_PHRASE, aA as ATU8_DUMMY_VECTOR, J as register$1, aB as AlreadyRegisteredError, aC as InvalidPassphraseError, K as login, aD as add_render_callback, aE as create_bidirectional_transition, aF as slide, aG as yw_owner, aH as load_pfps, I as ode, aI as Entities, aJ as StarSelect, aK as yw_network_active, aL as BigNumber, aM as XT_MINUTES, aN as CoinGecko, aO as format_amount, aP as oderac, aQ as yw_family, aR as subscribe_store, aS as onDestroy, aT as Agents, aU as Address, aV as Select, H as yw_navigator, E as Events, aW as format_fiat, aX as SX_ICON_DROPDOWN, aY as fold, C as CheckboxField, aZ as Portrait, a_ as oderom, a$ as syserr, b0 as popup_receive, B as open_external_link, b1 as forever, b2 as Info, b3 as SubHeader, b4 as setContext, b5 as afterUpdate, b6 as writable, b7 as tick, b8 as Pfps, L as F_NOOP, b9 as ofe, ba as ContactAgentType, bb as R_BECH32, bc as InlineTags, bd as proper, be as SX_ICON_EDIT, bf as SX_ICON_DELETE, bg as quintOut, bh as Apps, bi as Networks, F as global_receive, bj as TxnList, bk as svg_element, bl as yw_overscroll_pct, bm as yw_popup, bn as yw_page, bo as yw_menu_expanded, bp as yw_notifications, bq as yw_nav_collapsed, br as HtmlTag, bs as yw_header_props, bt as yw_progress, bu as SX_ICON_CLOSE, bv as logout, z as SI_VERSION, bw as yw_network, bx as dd, by as objects_might_differ, bz as getAllContexts, bA as yw_network_ref, bB as once_store_updates, bC as timeout, bD as UnregisteredError, bE as RecoverableVaultError, bF as CorruptedVaultError } from "./web-resource-cache.e17ad5a9.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var global = "";
function create_fragment$M(ctx) {
  let span;
  return {
    c() {
      span = element("span");
      set_style(span, "display", "none");
    },
    m(target, anchor) {
      insert(target, span, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
class Blank extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$M, safe_not_equal, {});
  }
}
const get_help_slot_changes = (dirty) => ({});
const get_help_slot_context = (ctx) => ({});
function create_if_block$j(ctx) {
  let div;
  let current;
  const help_slot_template = ctx[21].help;
  const help_slot = create_slot(help_slot_template, ctx, ctx[20], get_help_slot_context);
  return {
    c() {
      div = element("div");
      if (help_slot)
        help_slot.c();
      attr(div, "class", "display_none");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (help_slot) {
        help_slot.m(div, null);
      }
      ctx[23](div);
      current = true;
    },
    p(ctx2, dirty) {
      if (help_slot) {
        if (help_slot.p && (!current || dirty & 1048576)) {
          update_slot_base(
            help_slot,
            help_slot_template,
            ctx2,
            ctx2[20],
            !current ? get_all_dirty_from_scope(ctx2[20]) : get_slot_changes(help_slot_template, ctx2[20], dirty, get_help_slot_changes),
            get_help_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(help_slot, local);
      current = true;
    },
    o(local) {
      transition_out(help_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (help_slot)
        help_slot.d(detaching);
      ctx[23](null);
    }
  };
}
function create_fragment$L(ctx) {
  let div;
  let form_1;
  let t;
  let form_1_class_value;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[21].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[20], null);
  let if_block = "help" in ctx[10] && create_if_block$j(ctx);
  return {
    c() {
      div = element("div");
      form_1 = element("form");
      if (default_slot)
        default_slot.c();
      t = space();
      if (if_block)
        if_block.c();
      attr(form_1, "class", form_1_class_value = "screen " + ctx[1] + " svelte-re7ihy");
      attr(form_1, "data-s2-exit", ctx[9]);
      attr(form_1, "style", ctx[3]);
      attr(form_1, "autocomplete", "off");
      toggle_class(form_1, "flex", true);
      toggle_class(form_1, "scroll", true);
      toggle_class(form_1, "nav", ctx[7]);
      toggle_class(form_1, "progress", ctx[0]);
      toggle_class(form_1, "transparent", ctx[2]);
      toggle_class(form_1, "sublimate", false);
      toggle_class(form_1, "blur", ctx[6]);
      attr(div, "class", "bounds svelte-re7ihy");
      toggle_class(div, "slides", ctx[8]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, form_1);
      if (default_slot) {
        default_slot.m(form_1, null);
      }
      append(form_1, t);
      if (if_block)
        if_block.m(form_1, null);
      ctx[24](form_1);
      current = true;
      if (!mounted) {
        dispose = [
          listen(form_1, "submit", submit_handler_1),
          listen(form_1, "submit", ctx[22])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1048576)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[20],
            !current ? get_all_dirty_from_scope(ctx2[20]) : get_slot_changes(default_slot_template, ctx2[20], dirty, null),
            null
          );
        }
      }
      if ("help" in ctx2[10]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1024) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$j(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(form_1, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty & 2 && form_1_class_value !== (form_1_class_value = "screen " + ctx2[1] + " svelte-re7ihy")) {
        attr(form_1, "class", form_1_class_value);
      }
      if (!current || dirty & 8) {
        attr(form_1, "style", ctx2[3]);
      }
      if (dirty & 2) {
        toggle_class(form_1, "flex", true);
      }
      if (dirty & 2) {
        toggle_class(form_1, "scroll", true);
      }
      if (dirty & 130) {
        toggle_class(form_1, "nav", ctx2[7]);
      }
      if (dirty & 3) {
        toggle_class(form_1, "progress", ctx2[0]);
      }
      if (dirty & 6) {
        toggle_class(form_1, "transparent", ctx2[2]);
      }
      if (dirty & 2) {
        toggle_class(form_1, "sublimate", false);
      }
      if (dirty & 66) {
        toggle_class(form_1, "blur", ctx2[6]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
      if (if_block)
        if_block.d();
      ctx[24](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
const submit_handler_1 = (d_event) => void d_event.preventDefault();
function instance$I($$self, $$props, $$invalidate) {
  let $yw_nav_visible;
  let $yw_blur;
  component_subscribe($$self, yw_nav_visible, ($$value) => $$invalidate(25, $yw_nav_visible = $$value));
  component_subscribe($$self, yw_blur, ($$value) => $$invalidate(6, $yw_blur = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { nav = false } = $$props;
  const b_nav = nav;
  let { debug = "" } = $$props;
  let { progress = null } = $$props;
  let { full = false } = $$props;
  let { keyed = false } = $$props;
  let { classNames = "" } = $$props;
  const k_page = getContext("page");
  let { leaves = false } = $$props;
  let { swipes = false } = $$props;
  let { root = 0 === k_page.index } = $$props;
  let { slides = !leaves && !swipes && !root } = $$props;
  const b_slides = slides;
  let { form = false } = $$props;
  let { transparent = false } = $$props;
  let dm_screen;
  let dm_help = null;
  const si_exit = leaves ? "leaves" : swipes ? "swipes" : "";
  createEventDispatcher();
  onMount(() => {
    if (!k_page) {
      console.warn(`${debug || "unknown"} Screen missing page context`);
    } else {
      k_page.on({
        focus() {
          set_store_value(yw_nav_visible, $yw_nav_visible = b_nav, $yw_nav_visible);
        }
      });
    }
    if (keyed) {
      let x_scroll_top = 0;
      new MutationObserver(async (a_mutations) => {
        if (a_mutations[0]?.addedNodes.length) {
          try {
            x_scroll_top = dm_screen.scrollTop;
          } catch (e_null) {
          }
        } else if (a_mutations[0]?.removedNodes.length) {
          if (dm_screen) {
            $$invalidate(4, dm_screen.scrollTop = x_scroll_top, dm_screen);
          }
        }
      }).observe(dm_screen, { childList: true });
    }
  });
  let { style = "" } = $$props;
  function submit_handler2(event) {
    bubble.call(this, $$self, event);
  }
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      dm_help = $$value;
      $$invalidate(5, dm_help);
    });
  }
  function form_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      dm_screen = $$value;
      $$invalidate(4, dm_screen);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("nav" in $$props2)
      $$invalidate(11, nav = $$props2.nav);
    if ("debug" in $$props2)
      $$invalidate(12, debug = $$props2.debug);
    if ("progress" in $$props2)
      $$invalidate(0, progress = $$props2.progress);
    if ("full" in $$props2)
      $$invalidate(13, full = $$props2.full);
    if ("keyed" in $$props2)
      $$invalidate(14, keyed = $$props2.keyed);
    if ("classNames" in $$props2)
      $$invalidate(1, classNames = $$props2.classNames);
    if ("leaves" in $$props2)
      $$invalidate(15, leaves = $$props2.leaves);
    if ("swipes" in $$props2)
      $$invalidate(16, swipes = $$props2.swipes);
    if ("root" in $$props2)
      $$invalidate(17, root = $$props2.root);
    if ("slides" in $$props2)
      $$invalidate(18, slides = $$props2.slides);
    if ("form" in $$props2)
      $$invalidate(19, form = $$props2.form);
    if ("transparent" in $$props2)
      $$invalidate(2, transparent = $$props2.transparent);
    if ("style" in $$props2)
      $$invalidate(3, style = $$props2.style);
    if ("$$scope" in $$props2)
      $$invalidate(20, $$scope = $$props2.$$scope);
  };
  return [
    progress,
    classNames,
    transparent,
    style,
    dm_screen,
    dm_help,
    $yw_blur,
    b_nav,
    b_slides,
    si_exit,
    $$slots,
    nav,
    debug,
    full,
    keyed,
    leaves,
    swipes,
    root,
    slides,
    form,
    $$scope,
    slots,
    submit_handler2,
    div_binding,
    form_1_binding
  ];
}
class Screen extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$I, create_fragment$L, safe_not_equal, {
      nav: 11,
      debug: 12,
      progress: 0,
      full: 13,
      keyed: 14,
      classNames: 1,
      leaves: 15,
      swipes: 16,
      root: 17,
      slides: 18,
      form: 19,
      transparent: 2,
      style: 3
    });
  }
}
function create_fragment$K(ctx) {
  let picture;
  let source;
  let t;
  let img;
  let img_src_value;
  let mounted;
  let dispose;
  return {
    c() {
      picture = element("picture");
      source = element("source");
      t = space();
      img = element("img");
      attr(source, "srcset", ctx[3]);
      attr(source, "media", "(min-resolution: 2dppx)");
      attr(img, "alt", ctx[1]);
      if (!src_url_equal(img.src, img_src_value = ctx[2]))
        attr(img, "src", img_src_value);
      attr(img, "class", "svelte-5d3u97");
      attr(picture, "class", "no-margin logo svelte-5d3u97");
      set_style(picture, "width", ctx[0] + "px");
      set_style(picture, "height", ctx[0] + "px");
    },
    m(target, anchor) {
      insert(target, picture, anchor);
      append(picture, source);
      append(picture, t);
      append(picture, img);
      if (!mounted) {
        dispose = listen(picture, "click", ctx[6]);
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(picture);
      mounted = false;
      dispose();
    }
  };
}
function instance$H($$self, $$props, $$invalidate) {
  let { dim } = $$props;
  const x_dim = dim;
  let { alt = "StarShell logo" } = $$props;
  const s_alt = alt;
  const f_src = (x) => `/media/vendor/logo-${x}px.png`;
  const sr_default = f_src(x_dim);
  const sr_double = f_src(x_dim * 2);
  function click_handler2(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("dim" in $$props2)
      $$invalidate(4, dim = $$props2.dim);
    if ("alt" in $$props2)
      $$invalidate(5, alt = $$props2.alt);
  };
  return [x_dim, s_alt, sr_default, sr_double, dim, alt, click_handler2];
}
class StarShellLogo extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$H, create_fragment$K, safe_not_equal, { dim: 4, alt: 5 });
  }
}
const get_rows_slot_changes = (dirty) => ({});
const get_rows_slot_context = (ctx) => ({});
function create_fragment$J(ctx) {
  let div3;
  let div2;
  let div0;
  let h3;
  let t0;
  let t1;
  let div1;
  let div2_outro;
  let current;
  let mounted;
  let dispose;
  const rows_slot_template = ctx[4].rows;
  const rows_slot = create_slot(rows_slot_template, ctx, ctx[3], get_rows_slot_context);
  return {
    c() {
      div3 = element("div");
      div2 = element("div");
      div0 = element("div");
      h3 = element("h3");
      t0 = text(ctx[1]);
      t1 = space();
      div1 = element("div");
      if (rows_slot)
        rows_slot.c();
      attr(h3, "class", "svelte-1f5uzt4");
      attr(div0, "class", "top svelte-1f5uzt4");
      attr(div1, "class", "rows svelte-1f5uzt4");
      attr(div2, "class", "overlay select svelte-1f5uzt4");
      attr(div3, "class", "cancel svelte-1f5uzt4");
      toggle_class(div3, "showing", ctx[2]);
    },
    m(target, anchor) {
      insert(target, div3, anchor);
      append(div3, div2);
      append(div2, div0);
      append(div0, h3);
      append(h3, t0);
      append(div2, t1);
      append(div2, div1);
      if (rows_slot) {
        rows_slot.m(div1, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(div3, "click", ctx[5]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & 2)
        set_data(t0, ctx2[1]);
      if (rows_slot) {
        if (rows_slot.p && (!current || dirty & 8)) {
          update_slot_base(
            rows_slot,
            rows_slot_template,
            ctx2,
            ctx2[3],
            !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(rows_slot_template, ctx2[3], dirty, get_rows_slot_changes),
            get_rows_slot_context
          );
        }
      }
      if (dirty & 4) {
        toggle_class(div3, "showing", ctx2[2]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(rows_slot, local);
      if (div2_outro)
        div2_outro.end(1);
      current = true;
    },
    o(local) {
      transition_out(rows_slot, local);
      div2_outro = create_out_transition(div2, pause, {});
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      if (rows_slot)
        rows_slot.d(detaching);
      if (detaching && div2_outro)
        div2_outro.end();
      mounted = false;
      dispose();
    }
  };
}
function pause(dm, gc) {
  return { duration: 200 };
}
function instance$G($$self, $$props, $$invalidate) {
  let $yw_blur;
  component_subscribe($$self, yw_blur, ($$value) => $$invalidate(6, $yw_blur = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  let { title } = $$props;
  let { open = true } = $$props;
  let b_showing = false;
  setTimeout(
    () => {
      $$invalidate(2, b_showing = true);
    },
    10
  );
  const click_handler2 = () => {
    $$invalidate(2, b_showing = false);
    $$invalidate(0, open = false);
  };
  $$self.$$set = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(1, title = $$props2.title);
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      set_store_value(yw_blur, $yw_blur = open, $yw_blur);
    }
  };
  return [open, title, b_showing, $$scope, slots, click_handler2];
}
class OverlaySelect extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$G, create_fragment$J, safe_not_equal, { title: 1, open: 0 });
  }
}
var SX_ICON_ARROW_LEFT = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n	<style type="text/css">\n		.s2r-arrow-left-fg {\n			fill: var(--svg-color-fg, currentColor);\n		}\n	</style>\n	<path class="s2r-arrow-left-fg" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/>\n</svg>\n';
var SX_ICON_SEARCH = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n	<style type="text/css">\n		.s2r-search-fg {\n			fill: var(--svg-color-fg, currentColor);\n		}\n	</style>\n	<path class="s2r-search-fg" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n</svg>\n';
var SX_CHECKED = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">\n	<style type="text/css">\n		.s2r-checked-circle-fg {\n			fill: var(--svg-color-fg, currentColor);\n		}\n		.s2r-checked-circle-bg {\n			fill: var(--svg-color-bg, black);\n		}\n	</style>\n	<circle class="s2r-checked-circle-bg" cx="10" cy="10" r="8" />\n	<path class="s2r-checked-circle-fg" d="M10.0003 1.6665C5.40033 1.6665 1.66699 5.39984 1.66699 9.99984C1.66699 14.5998 5.40033 18.3332 10.0003 18.3332C14.6003 18.3332 18.3337 14.5998 18.3337 9.99984C18.3337 5.39984 14.6003 1.6665 10.0003 1.6665ZM8.33366 14.1665L4.16699 9.99984L5.34199 8.82484L8.33366 11.8082L14.6587 5.48317L15.8337 6.6665L8.33366 14.1665Z" />\n</svg>\n';
function get_each_context$9(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[50] = list[i][0];
  child_ctx[51] = list[i][1];
  return child_ctx;
}
function get_each_context_1$3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[55] = list[i][0];
  child_ctx[56] = list[i][1];
  return child_ctx;
}
function create_if_block_11(ctx) {
  let starshelllogo;
  let current;
  starshelllogo = new StarShellLogo({
    props: {
      dim: 48,
      alt: "Click to view general status"
    }
  });
  starshelllogo.$on("click", ctx[35]);
  return {
    c() {
      create_component(starshelllogo.$$.fragment);
    },
    m(target, anchor) {
      mount_component(starshelllogo, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(starshelllogo.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(starshelllogo.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(starshelllogo, detaching);
    }
  };
}
function create_if_block_10(ctx) {
  let span;
  let mounted;
  let dispose;
  return {
    c() {
      span = element("span");
      attr(span, "class", "back svelte-1fcz7ql");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      span.innerHTML = SX_ICON_ARROW_LEFT;
      if (!mounted) {
        dispose = listen(span, "click", ctx[34]);
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(span);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_8(ctx) {
  let span;
  let t1;
  let if_block_anchor;
  let if_block = ctx[18] && create_if_block_9(ctx);
  return {
    c() {
      span = element("span");
      span.textContent = `${ctx[17]}`;
      t1 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr(span, "class", "name svelte-1fcz7ql");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      insert(target, t1, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (ctx2[18])
        if_block.p(ctx2, dirty);
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if (detaching)
        detach(t1);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block_9(ctx) {
  let span;
  return {
    c() {
      span = element("span");
      span.textContent = `- ${ctx[18]}`;
      attr(span, "class", "symbol svelte-1fcz7ql");
    },
    m(target, anchor) {
      insert(target, span, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_5$1(ctx) {
  let span;
  let previous_key = ctx[6];
  let t;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  let key_block = create_key_block_1$1(ctx);
  let if_block = ctx[5] && create_if_block_6(ctx);
  return {
    c() {
      span = element("span");
      key_block.c();
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr(span, "class", "network svelte-1fcz7ql");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      key_block.m(span, null);
      insert(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(span, "click", ctx[36]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 64 && safe_not_equal(previous_key, previous_key = ctx2[6])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block_1$1(ctx2);
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(span, null);
      } else {
        key_block.p(ctx2, dirty);
      }
      if (ctx2[5]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & 32) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_6(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(key_block);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(key_block);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      key_block.d(detaching);
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
}
function create_key_block_1$1(ctx) {
  let pfpdisplay;
  let current;
  const pfpdisplay_spread_levels = [{ resource: ctx[6] }, ctx[21](false)];
  let pfpdisplay_props = {};
  for (let i = 0; i < pfpdisplay_spread_levels.length; i += 1) {
    pfpdisplay_props = assign(pfpdisplay_props, pfpdisplay_spread_levels[i]);
  }
  pfpdisplay = new PfpDisplay({ props: pfpdisplay_props });
  return {
    c() {
      create_component(pfpdisplay.$$.fragment);
    },
    m(target, anchor) {
      mount_component(pfpdisplay, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const pfpdisplay_changes = dirty[0] & 2097216 ? get_spread_update(pfpdisplay_spread_levels, [
        dirty[0] & 64 && { resource: ctx2[6] },
        dirty[0] & 2097152 && get_spread_object(ctx2[21](false))
      ]) : {};
      pfpdisplay.$set(pfpdisplay_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(pfpdisplay.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(pfpdisplay.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(pfpdisplay, detaching);
    }
  };
}
function create_if_block_6(ctx) {
  let overlayselect;
  let updating_open;
  let current;
  function overlayselect_open_binding(value) {
    ctx[38](value);
  }
  let overlayselect_props = {
    title: "Switch Network",
    $$slots: { rows: [create_rows_slot_1] },
    $$scope: { ctx }
  };
  if (ctx[5] !== void 0) {
    overlayselect_props.open = ctx[5];
  }
  overlayselect = new OverlaySelect({ props: overlayselect_props });
  binding_callbacks.push(() => bind(overlayselect, "open", overlayselect_open_binding));
  return {
    c() {
      create_component(overlayselect.$$.fragment);
    },
    m(target, anchor) {
      mount_component(overlayselect, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const overlayselect_changes = {};
      if (dirty[0] & 160 | dirty[1] & 268435456) {
        overlayselect_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open && dirty[0] & 32) {
        updating_open = true;
        overlayselect_changes.open = ctx2[5];
        add_flush_callback(() => updating_open = false);
      }
      overlayselect.$set(overlayselect_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(overlayselect.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(overlayselect.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(overlayselect, detaching);
    }
  };
}
function create_catch_block_1$1(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block_1$1(ctx) {
  let each_1_anchor;
  let current;
  let each_value_1 = ctx[54].entries();
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1$3(get_each_context_1$3(ctx, each_value_1, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty[0] & 160) {
        each_value_1 = ctx2[54].entries();
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1$3(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_1$3(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value_1.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_if_block_7(ctx) {
  let span;
  return {
    c() {
      span = element("span");
      attr(span, "class", "overlay-select icon svelte-1fcz7ql");
      set_style(span, "--icon-color", "var(--theme-color-primary)");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      span.innerHTML = SX_CHECKED;
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_right_slot_1(ctx) {
  let t;
  let if_block = ctx[7] === ctx[55] && create_if_block_7();
  return {
    c() {
      if (if_block)
        if_block.c();
      t = space();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (ctx2[7] === ctx2[55]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_7();
          if_block.c();
          if_block.m(t.parentNode, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block_1$3(ctx) {
  let row;
  let current;
  function click_handler_3() {
    return ctx[37](ctx[55]);
  }
  row = new Row({
    props: {
      resource: ctx[56],
      detail: "Default Provider",
      $$slots: { right: [create_right_slot_1] },
      $$scope: { ctx }
    }
  });
  row.$on("click", click_handler_3);
  return {
    c() {
      create_component(row.$$.fragment);
    },
    m(target, anchor) {
      mount_component(row, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const row_changes = {};
      if (dirty[0] & 128 | dirty[1] & 268435456) {
        row_changes.$$scope = { dirty, ctx };
      }
      row.$set(row_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(row.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(row.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(row, detaching);
    }
  };
}
function create_pending_block_1$1(ctx) {
  let t;
  return {
    c() {
      t = text("...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_rows_slot_1(ctx) {
  let await_block_anchor;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block_1$1,
    then: create_then_block_1$1,
    catch: create_catch_block_1$1,
    value: 54,
    blocks: [, , ,]
  };
  handle_promise(Chains.read(), info);
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    m(target, anchor) {
      insert(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function create_if_block_2$5(ctx) {
  let span;
  let previous_key = ctx[9];
  let t;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  let key_block = create_key_block$3(ctx);
  let if_block = ctx[8] && create_if_block_3$2(ctx);
  return {
    c() {
      span = element("span");
      key_block.c();
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr(span, "class", "account svelte-1fcz7ql");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      key_block.m(span, null);
      insert(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(span, "click", ctx[39]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 512 && safe_not_equal(previous_key, previous_key = ctx2[9])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block$3(ctx2);
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(span, null);
      } else {
        key_block.p(ctx2, dirty);
      }
      if (ctx2[8]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & 256) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_3$2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(key_block);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(key_block);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      key_block.d(detaching);
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
}
function create_key_block$3(ctx) {
  let pfpdisplay;
  let current;
  const pfpdisplay_spread_levels = [{ resource: ctx[9] }, ctx[21](true)];
  let pfpdisplay_props = {};
  for (let i = 0; i < pfpdisplay_spread_levels.length; i += 1) {
    pfpdisplay_props = assign(pfpdisplay_props, pfpdisplay_spread_levels[i]);
  }
  pfpdisplay = new PfpDisplay({ props: pfpdisplay_props });
  return {
    c() {
      create_component(pfpdisplay.$$.fragment);
    },
    m(target, anchor) {
      mount_component(pfpdisplay, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const pfpdisplay_changes = dirty[0] & 2097664 ? get_spread_update(pfpdisplay_spread_levels, [
        dirty[0] & 512 && { resource: ctx2[9] },
        dirty[0] & 2097152 && get_spread_object(ctx2[21](true))
      ]) : {};
      pfpdisplay.$set(pfpdisplay_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(pfpdisplay.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(pfpdisplay.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(pfpdisplay, detaching);
    }
  };
}
function create_if_block_3$2(ctx) {
  let overlayselect;
  let updating_open;
  let current;
  function overlayselect_open_binding_1(value) {
    ctx[41](value);
  }
  let overlayselect_props = {
    title: "Switch Account",
    $$slots: { rows: [create_rows_slot] },
    $$scope: { ctx }
  };
  if (ctx[8] !== void 0) {
    overlayselect_props.open = ctx[8];
  }
  overlayselect = new OverlaySelect({ props: overlayselect_props });
  binding_callbacks.push(() => bind(overlayselect, "open", overlayselect_open_binding_1));
  return {
    c() {
      create_component(overlayselect.$$.fragment);
    },
    m(target, anchor) {
      mount_component(overlayselect, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const overlayselect_changes = {};
      if (dirty[0] & 1280 | dirty[1] & 268435456) {
        overlayselect_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open && dirty[0] & 256) {
        updating_open = true;
        overlayselect_changes.open = ctx2[8];
        add_flush_callback(() => updating_open = false);
      }
      overlayselect.$set(overlayselect_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(overlayselect.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(overlayselect.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(overlayselect, detaching);
    }
  };
}
function create_catch_block$c(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block$c(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[49].entries();
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$9(get_each_context$9(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty[0] & 1280) {
        each_value = ctx2[49].entries();
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$9(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$9(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_if_block_4$1(ctx) {
  let span;
  return {
    c() {
      span = element("span");
      attr(span, "class", "overlay-select icon svelte-1fcz7ql");
      set_style(span, "--icon-color", "var(--theme-color-primary)");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      span.innerHTML = SX_CHECKED;
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_right_slot(ctx) {
  let t;
  let if_block = ctx[10] === ctx[50] && create_if_block_4$1();
  return {
    c() {
      if (if_block)
        if_block.c();
      t = space();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (ctx2[10] === ctx2[50]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_4$1();
          if_block.c();
          if_block.m(t.parentNode, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t);
    }
  };
}
function create_icon_slot(ctx) {
  let pfpdisplay;
  let t;
  let current;
  pfpdisplay = new PfpDisplay({
    props: { dim: 32, resource: ctx[51] }
  });
  return {
    c() {
      create_component(pfpdisplay.$$.fragment);
      t = space();
    },
    m(target, anchor) {
      mount_component(pfpdisplay, target, anchor);
      insert(target, t, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(pfpdisplay.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(pfpdisplay.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(pfpdisplay, detaching);
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block$9(ctx) {
  let row;
  let current;
  function click_handler_5() {
    return ctx[40](ctx[50]);
  }
  row = new Row({
    props: {
      resource: ctx[51],
      resourcePath: ctx[50],
      detail: ctx[51].extra?.total_fiat_cache ?? "(?)",
      $$slots: {
        icon: [create_icon_slot],
        right: [create_right_slot]
      },
      $$scope: { ctx }
    }
  });
  row.$on("click", click_handler_5);
  return {
    c() {
      create_component(row.$$.fragment);
    },
    m(target, anchor) {
      mount_component(row, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const row_changes = {};
      if (dirty[0] & 1024 | dirty[1] & 268435456) {
        row_changes.$$scope = { dirty, ctx };
      }
      row.$set(row_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(row.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(row.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(row, detaching);
    }
  };
}
function create_pending_block$c(ctx) {
  let t;
  return {
    c() {
      t = text("...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_rows_slot(ctx) {
  let await_block_anchor;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$c,
    then: create_then_block$c,
    catch: create_catch_block$c,
    value: 49,
    blocks: [, , ,]
  };
  handle_promise(Accounts.read(), info);
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    m(target, anchor) {
      insert(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function create_if_block_1$a(ctx) {
  let close;
  let current;
  close = new Close({});
  close.$on("click", ctx[42]);
  return {
    c() {
      create_component(close.$$.fragment);
    },
    m(target, anchor) {
      mount_component(close, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(close.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(close.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(close, detaching);
    }
  };
}
function create_if_block$i(ctx) {
  let div;
  let input;
  let t;
  let span;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      input = element("input");
      t = space();
      span = element("span");
      attr(input, "type", "text");
      input.autofocus = ctx[0];
      attr(input, "placeholder", "Search anything: token, account, contact, txn...");
      attr(span, "class", "action svelte-1fcz7ql");
      attr(div, "class", "search svelte-1fcz7ql");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, input);
      set_input_value(input, ctx[3]);
      ctx[44](input);
      append(div, t);
      append(div, span);
      span.innerHTML = SX_ICON_SEARCH;
      if (ctx[0])
        input.focus();
      if (!mounted) {
        dispose = [
          listen(input, "input", ctx[43]),
          listen(input, "input", ctx[23])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 1) {
        input.autofocus = ctx2[0];
      }
      if (dirty[0] & 8 && input.value !== ctx2[3]) {
        set_input_value(input, ctx2[3]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[44](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$I(ctx) {
  let div3;
  let div2;
  let current_block_type_index;
  let if_block0;
  let t0;
  let span0;
  let div0;
  let t1;
  let div1;
  let t3;
  let span2;
  let span1;
  let t4;
  let t5;
  let t6;
  let current;
  const if_block_creators = [create_if_block_10, create_if_block_11];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[11])
      return 0;
    if (!ctx2[12] && !ctx2[13])
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  let if_block1 = ctx[17] && create_if_block_8(ctx);
  let if_block2 = ctx[15] && create_if_block_5$1(ctx);
  let if_block3 = ctx[14] && create_if_block_2$5(ctx);
  let if_block4 = ctx[12] && create_if_block_1$a(ctx);
  let if_block5 = ctx[16] && create_if_block$i(ctx);
  return {
    c() {
      div3 = element("div");
      div2 = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      span0 = element("span");
      div0 = element("div");
      if (if_block1)
        if_block1.c();
      t1 = space();
      div1 = element("div");
      div1.textContent = `${ctx[19]}`;
      t3 = space();
      span2 = element("span");
      span1 = element("span");
      if (if_block2)
        if_block2.c();
      t4 = space();
      if (if_block3)
        if_block3.c();
      t5 = space();
      if (if_block4)
        if_block4.c();
      t6 = space();
      if (if_block5)
        if_block5.c();
      attr(div0, "class", "title svelte-1fcz7ql");
      attr(div1, "class", "subtitle svelte-1fcz7ql");
      attr(span0, "class", "main svelte-1fcz7ql");
      attr(span1, "class", "cluster svelte-1fcz7ql");
      attr(span2, "class", "right svelte-1fcz7ql");
      toggle_class(span2, "heightless", !ctx[15] && ctx[12]);
      attr(div2, "class", "top svelte-1fcz7ql");
      attr(div3, "class", "header svelte-1fcz7ql");
    },
    m(target, anchor) {
      insert(target, div3, anchor);
      append(div3, div2);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(div2, null);
      }
      append(div2, t0);
      append(div2, span0);
      append(span0, div0);
      if (if_block1)
        if_block1.m(div0, null);
      append(span0, t1);
      append(span0, div1);
      append(div2, t3);
      append(div2, span2);
      append(span2, span1);
      if (if_block2)
        if_block2.m(span1, null);
      append(span1, t4);
      if (if_block3)
        if_block3.m(span1, null);
      append(span2, t5);
      if (if_block4)
        if_block4.m(span2, null);
      append(div3, t6);
      if (if_block5)
        if_block5.m(div3, null);
      ctx[45](div3);
      current = true;
    },
    p(ctx2, dirty) {
      if (if_block0)
        if_block0.p(ctx2, dirty);
      if (ctx2[17])
        if_block1.p(ctx2, dirty);
      if (ctx2[15])
        if_block2.p(ctx2, dirty);
      if (ctx2[14])
        if_block3.p(ctx2, dirty);
      if (ctx2[12])
        if_block4.p(ctx2, dirty);
      if (ctx2[16])
        if_block5.p(ctx2, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block2);
      transition_in(if_block3);
      transition_in(if_block4);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block2);
      transition_out(if_block3);
      transition_out(if_block4);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d();
      }
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      if (if_block3)
        if_block3.d();
      if (if_block4)
        if_block4.d();
      if (if_block5)
        if_block5.d();
      ctx[45](null);
    }
  };
}
function instance$F($$self, $$props, $$invalidate) {
  let $yw_search;
  let $yw_cancel_search;
  let $yw_thread;
  let $yw_menu_vendor;
  let $yw_overlay_network;
  let $yw_chain;
  let $yw_chain_ref;
  let $yw_overlay_account;
  let $yw_account;
  let $yw_account_ref;
  component_subscribe($$self, yw_search, ($$value) => $$invalidate(46, $yw_search = $$value));
  component_subscribe($$self, yw_cancel_search, ($$value) => $$invalidate(47, $yw_cancel_search = $$value));
  component_subscribe($$self, yw_thread, ($$value) => $$invalidate(48, $yw_thread = $$value));
  component_subscribe($$self, yw_menu_vendor, ($$value) => $$invalidate(4, $yw_menu_vendor = $$value));
  component_subscribe($$self, yw_overlay_network, ($$value) => $$invalidate(5, $yw_overlay_network = $$value));
  component_subscribe($$self, yw_chain, ($$value) => $$invalidate(6, $yw_chain = $$value));
  component_subscribe($$self, yw_chain_ref, ($$value) => $$invalidate(7, $yw_chain_ref = $$value));
  component_subscribe($$self, yw_overlay_account, ($$value) => $$invalidate(8, $yw_overlay_account = $$value));
  component_subscribe($$self, yw_account, ($$value) => $$invalidate(9, $yw_account = $$value));
  component_subscribe($$self, yw_account_ref, ($$value) => $$invalidate(10, $yw_account_ref = $$value));
  let { pops = false } = $$props;
  const b_pops = pops;
  let { exits = false } = $$props;
  const b_exits = exits;
  let { plain = false } = $$props;
  const b_plain = plain;
  let { account = false } = $$props;
  const b_account = account;
  let { network = false } = $$props;
  const b_network = network;
  let { search: search2 = false } = $$props;
  const b_search = search2;
  let { title = "" } = $$props;
  const s_title = title;
  let { symbol = "" } = $$props;
  const s_symbol = symbol;
  let { subtitle = "" } = $$props;
  const s_subtitle = subtitle;
  const dispatch = createEventDispatcher();
  const overlay_pfp_props = (b_mirror = false) => ({
    dim: 21,
    bg: "satin",
    genStyle: "font-size:21px; outline:none;",
    rootStyle: `
			padding: 5px 6px;
			border: 2px solid var(--theme-color-border);
			border-radius: ${b_mirror ? "0 4px 4px 0" : "4px 0 0 4px"};
		`.replace(/\s+/g, " ")
  });
  const k_page = getContext("page");
  let dm_header;
  let dm_search;
  let { isSearchScreen = false } = $$props;
  let { search_input = "" } = $$props;
  let s_search = $yw_search;
  yw_search.subscribe((s_value) => {
    if (isSearchScreen && s_value) {
      console.log("search screen and search text");
      $$invalidate(3, s_search = s_value);
      if (dm_search) {
        setTimeout(
          () => {
            dm_search.focus();
          },
          0
        );
      }
    } else if (!s_value) {
      $$invalidate(3, s_search = "");
    }
  });
  function update_search(d_event) {
    if (isSearchScreen) {
      if (!s_search) {
        set_store_value(yw_search, $yw_search = "", $yw_search);
        $yw_cancel_search();
      } else {
        dispatch("search", s_search);
      }
    } else if (s_search) {
      $yw_thread.id;
      const dm_focus = qs(dm_header, ":focus");
      if (dm_focus) {
        dm_focus.blur();
      }
      set_store_value(
        yw_cancel_search,
        $yw_cancel_search = () => {
          $$invalidate(3, s_search = "");
          console.log("stealing focus for cancel search");
          dm_search.focus();
        },
        $yw_cancel_search
      );
      set_store_value(yw_search, $yw_search = s_search, $yw_search);
    }
  }
  const click_handler2 = () => k_page.pop();
  const click_handler_1 = () => set_store_value(yw_menu_vendor, $yw_menu_vendor = true, $yw_menu_vendor);
  const click_handler_2 = (d_event) => {
    d_event.stopPropagation();
    set_store_value(yw_overlay_network, $yw_overlay_network = !$yw_overlay_network, $yw_overlay_network);
  };
  const click_handler_3 = (p_chain) => {
    set_store_value(yw_chain_ref, $yw_chain_ref = p_chain, $yw_chain_ref);
    set_store_value(yw_overlay_network, $yw_overlay_network = false, $yw_overlay_network);
  };
  function overlayselect_open_binding(value) {
    $yw_overlay_network = value;
    yw_overlay_network.set($yw_overlay_network);
  }
  const click_handler_4 = (d_event) => {
    d_event.stopPropagation();
    set_store_value(yw_overlay_account, $yw_overlay_account = !$yw_overlay_account, $yw_overlay_account);
  };
  const click_handler_5 = (p_account) => {
    set_store_value(yw_account_ref, $yw_account_ref = p_account, $yw_account_ref);
    set_store_value(yw_overlay_account, $yw_overlay_account = false, $yw_overlay_account);
  };
  function overlayselect_open_binding_1(value) {
    $yw_overlay_account = value;
    yw_overlay_account.set($yw_overlay_account);
  }
  const click_handler_6 = () => dispatch("close");
  function input_input_handler() {
    s_search = this.value;
    $$invalidate(3, s_search);
  }
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      dm_search = $$value;
      $$invalidate(2, dm_search);
    });
  }
  function div3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      dm_header = $$value;
      $$invalidate(1, dm_header);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("pops" in $$props2)
      $$invalidate(24, pops = $$props2.pops);
    if ("exits" in $$props2)
      $$invalidate(25, exits = $$props2.exits);
    if ("plain" in $$props2)
      $$invalidate(26, plain = $$props2.plain);
    if ("account" in $$props2)
      $$invalidate(27, account = $$props2.account);
    if ("network" in $$props2)
      $$invalidate(28, network = $$props2.network);
    if ("search" in $$props2)
      $$invalidate(29, search2 = $$props2.search);
    if ("title" in $$props2)
      $$invalidate(30, title = $$props2.title);
    if ("symbol" in $$props2)
      $$invalidate(31, symbol = $$props2.symbol);
    if ("subtitle" in $$props2)
      $$invalidate(32, subtitle = $$props2.subtitle);
    if ("isSearchScreen" in $$props2)
      $$invalidate(0, isSearchScreen = $$props2.isSearchScreen);
    if ("search_input" in $$props2)
      $$invalidate(33, search_input = $$props2.search_input);
  };
  return [
    isSearchScreen,
    dm_header,
    dm_search,
    s_search,
    $yw_menu_vendor,
    $yw_overlay_network,
    $yw_chain,
    $yw_chain_ref,
    $yw_overlay_account,
    $yw_account,
    $yw_account_ref,
    b_pops,
    b_exits,
    b_plain,
    b_account,
    b_network,
    b_search,
    s_title,
    s_symbol,
    s_subtitle,
    dispatch,
    overlay_pfp_props,
    k_page,
    update_search,
    pops,
    exits,
    plain,
    account,
    network,
    search2,
    title,
    symbol,
    subtitle,
    search_input,
    click_handler2,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    overlayselect_open_binding,
    click_handler_4,
    click_handler_5,
    overlayselect_open_binding_1,
    click_handler_6,
    input_input_handler,
    input_binding,
    div3_binding
  ];
}
class Header extends SvelteComponent {
  constructor(options) {
    super();
    init(
      this,
      options,
      instance$F,
      create_fragment$I,
      safe_not_equal,
      {
        pops: 24,
        exits: 25,
        plain: 26,
        account: 27,
        network: 28,
        search: 29,
        title: 30,
        symbol: 31,
        subtitle: 32,
        isSearchScreen: 0,
        search_input: 33
      },
      null,
      [-1, -1]
    );
  }
}
function get_each_context$8(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
}
function create_if_block_1$9(ctx) {
  let span2;
  let span0;
  let t0;
  let t1_value = format_ms(ctx[2].value.offset) + "";
  let t1;
  let t2;
  let t3;
  let span1;
  let t4_value = ctx[2].value.message + "";
  let t4;
  return {
    c() {
      span2 = element("span");
      span0 = element("span");
      t0 = text("+");
      t1 = text(t1_value);
      t2 = text("ms:");
      t3 = space();
      span1 = element("span");
      t4 = text(t4_value);
      attr(span0, "class", "offset");
      attr(span1, "class", "message");
      attr(span2, "class", "event");
    },
    m(target, anchor) {
      insert(target, span2, anchor);
      append(span2, span0);
      append(span0, t0);
      append(span0, t1);
      append(span0, t2);
      append(span2, t3);
      append(span2, span1);
      append(span1, t4);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t1_value !== (t1_value = format_ms(ctx2[2].value.offset) + ""))
        set_data(t1, t1_value);
      if (dirty & 1 && t4_value !== (t4_value = ctx2[2].value.message + ""))
        set_data(t4, t4_value);
    },
    d(detaching) {
      if (detaching)
        detach(span2);
    }
  };
}
function create_if_block$h(ctx) {
  let span;
  let t_value = ctx[2].value + "";
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      attr(span, "class", "string");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[2].value + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_each_block$8(ctx) {
  let li;
  let t;
  function select_block_type(ctx2, dirty) {
    if ("string" === ctx2[2].type)
      return create_if_block$h;
    if ("event" === ctx2[2].type)
      return create_if_block_1$9;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type && current_block_type(ctx);
  return {
    c() {
      li = element("li");
      if (if_block)
        if_block.c();
      t = space();
    },
    m(target, anchor) {
      insert(target, li, anchor);
      if (if_block)
        if_block.m(li, null);
      append(li, t);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if (if_block)
          if_block.d(1);
        if_block = current_block_type && current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(li, t);
        }
      }
    },
    d(detaching) {
      if (detaching)
        detach(li);
      if (if_block) {
        if_block.d();
      }
    }
  };
}
function create_fragment$H(ctx) {
  let div;
  let ol;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$8(get_each_context$8(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      ol = element("ol");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(div, "class", "log-container svelte-13jddbg");
      toggle_class(div, "display_none", ctx[1]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, ol);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ol, null);
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        each_value = ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$8(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$8(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ol, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & 2) {
        toggle_class(div, "display_none", ctx2[1]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
class Logger {
  constructor() {
    this._a_items = [];
  }
  get items() {
    return this._a_items;
  }
  set items(a_items) {
    this._a_items = a_items;
  }
  event(s_msg, xt_offset) {
    this._a_items.push({
      type: "event",
      value: { message: s_msg, offset: xt_offset }
    });
    return this;
  }
}
function format_ms(n_ms) {
  return (n_ms / 1e3).toFixed(2).padStart(5, "0");
}
function instance$E($$self, $$props, $$invalidate) {
  let { items } = $$props;
  let { hide = false } = $$props;
  $$self.$$set = ($$props2) => {
    if ("items" in $$props2)
      $$invalidate(0, items = $$props2.items);
    if ("hide" in $$props2)
      $$invalidate(1, hide = $$props2.hide);
  };
  return [items, hide];
}
class Log extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$E, create_fragment$H, safe_not_equal, { items: 0, hide: 1 });
  }
}
function create_fragment$G(ctx) {
  let div;
  let img;
  let img_src_value;
  return {
    c() {
      div = element("div");
      img = element("img");
      attr(img, "alt", "StarShell title");
      if (!src_url_equal(img.src, img_src_value = "/media/vendor/title.svg"))
        attr(img, "src", img_src_value);
      attr(img, "class", "svelte-1htd4i8");
      attr(div, "class", "no-margin title svelte-1htd4i8");
      set_style(div, "width", ctx[0] + "px");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, img);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function instance$D($$self, $$props, $$invalidate) {
  let { width = 180 } = $$props;
  const x_width = width;
  $$self.$$set = ($$props2) => {
    if ("width" in $$props2)
      $$invalidate(1, width = $$props2.width);
  };
  return [x_width, width];
}
class StarShellTitle extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$D, create_fragment$G, safe_not_equal, { width: 1 });
  }
}
function create_default_slot$j(ctx) {
  let h3;
  let t1;
  let p0;
  let t3;
  let p1;
  let t5;
  let p2;
  let t7;
  let actionsline;
  let current;
  actionsline = new ActionsLine({
    props: {
      cancel: "pop",
      confirm: ["Use anyway", ctx[0]],
      wait: 5e3
    }
  });
  return {
    c() {
      h3 = element("h3");
      h3.textContent = "Weak Password Warning";
      t1 = space();
      p0 = element("p");
      p0.textContent = "The password you entered was found on a list of the top ten thousand most commonly used passwords.";
      t3 = space();
      p1 = element("p");
      p1.textContent = "In order to help prevent the loss of funds, you are encouraged to create a strong, unique password.";
      t5 = space();
      p2 = element("p");
      p2.textContent = "How do you want to proceed?";
      t7 = space();
      create_component(actionsline.$$.fragment);
    },
    m(target, anchor) {
      insert(target, h3, anchor);
      insert(target, t1, anchor);
      insert(target, p0, anchor);
      insert(target, t3, anchor);
      insert(target, p1, anchor);
      insert(target, t5, anchor);
      insert(target, p2, anchor);
      insert(target, t7, anchor);
      mount_component(actionsline, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(actionsline.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(actionsline.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(h3);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(p0);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(p1);
      if (detaching)
        detach(t5);
      if (detaching)
        detach(p2);
      if (detaching)
        detach(t7);
      destroy_component(actionsline, detaching);
    }
  };
}
function create_fragment$F(ctx) {
  let screen;
  let current;
  screen = new Screen({
    props: {
      $$slots: { default: [create_default_slot$j] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(screen.$$.fragment);
    },
    m(target, anchor) {
      mount_component(screen, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const screen_changes = {};
      if (dirty & 32) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(screen, detaching);
    }
  };
}
function instance$C($$self, $$props, $$invalidate) {
  let { attempt_register } = $$props;
  let { weakness } = $$props;
  const k_page = getContext("page");
  function use_anyway() {
    attempt_register();
    k_page.pop();
  }
  $$self.$$set = ($$props2) => {
    if ("attempt_register" in $$props2)
      $$invalidate(1, attempt_register = $$props2.attempt_register);
    if ("weakness" in $$props2)
      $$invalidate(2, weakness = $$props2.weakness);
  };
  return [use_anyway, attempt_register, weakness];
}
class RegisterWeakPassword extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$C, create_fragment$F, safe_not_equal, { attempt_register: 1, weakness: 2 });
  }
}
function create_if_block_2$4(ctx) {
  let div;
  let t;
  let div_transition;
  let current;
  return {
    c() {
      div = element("div");
      t = text(ctx[4]);
      attr(div, "class", "validation-message");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t);
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty & 16)
        set_data(t, ctx2[4]);
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, slide, { duration: 300 }, true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, slide, { duration: 300 }, false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_default_slot_2$6(ctx) {
  let input;
  let t;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block = !ctx[2] && ctx[4] && create_if_block_2$4(ctx);
  return {
    c() {
      input = element("input");
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr(input, "type", "password");
      attr(input, "autocomplete", "new-password");
      attr(input, "name", "password");
      attr(input, "placeholder", "Password");
    },
    m(target, anchor) {
      insert(target, input, anchor);
      set_input_value(input, ctx[0]);
      insert(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(input, "blur", ctx[10]),
          listen(input, "input", ctx[11])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 1 && input.value !== ctx2[0]) {
        set_input_value(input, ctx2[0]);
      }
      if (!ctx2[2] && ctx2[4]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 20) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_2$4(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(input);
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_1$8(ctx) {
  let div;
  let t;
  let div_transition;
  let current;
  return {
    c() {
      div = element("div");
      t = text(ctx[5]);
      attr(div, "class", "validation-message");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t);
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty & 32)
        set_data(t, ctx2[5]);
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, slide, { duration: 300 }, true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, slide, { duration: 300 }, false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_default_slot_1$8(ctx) {
  let input;
  let t;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block = !ctx[2] && ctx[5] && create_if_block_1$8(ctx);
  return {
    c() {
      input = element("input");
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr(input, "type", "password");
      attr(input, "autocomplete", "new-password");
      attr(input, "name", "verify");
      attr(input, "placeholder", "Password");
    },
    m(target, anchor) {
      insert(target, input, anchor);
      set_input_value(input, ctx[1]);
      insert(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(input, "blur", ctx[12]),
          listen(input, "input", ctx[13])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 2 && input.value !== ctx2[1]) {
        set_input_value(input, ctx2[1]);
      }
      if (!ctx2[2] && ctx2[5]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 36) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1$8(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(input);
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$g(ctx) {
  let pre;
  let t;
  return {
    c() {
      pre = element("pre");
      t = text(ctx[3]);
    },
    m(target, anchor) {
      insert(target, pre, anchor);
      append(pre, t);
    },
    p(ctx2, dirty) {
      if (dirty & 8)
        set_data(t, ctx2[3]);
    },
    d(detaching) {
      if (detaching)
        detach(pre);
    }
  };
}
function create_default_slot$i(ctx) {
  let center;
  let div0;
  let starshelllogo;
  let t0;
  let starshelltitle;
  let t1;
  let p2;
  let t3;
  let div1;
  let input;
  let t4;
  let field0;
  let t5;
  let field1;
  let t6;
  let log_1;
  let updating_items;
  let t7;
  let t8;
  let actionsline;
  let current;
  starshelllogo = new StarShellLogo({ props: { dim: 96 } });
  starshelltitle = new StarShellTitle({ props: { width: 150 } });
  field0 = new Field({
    props: {
      key: "password",
      name: "New password",
      $$slots: { default: [create_default_slot_2$6] },
      $$scope: { ctx }
    }
  });
  field1 = new Field({
    props: {
      key: "verify-password",
      name: "Verify password",
      $$slots: { default: [create_default_slot_1$8] },
      $$scope: { ctx }
    }
  });
  function log_1_items_binding(value) {
    ctx[14](value);
  }
  let log_1_props = {};
  if (ctx[6].items !== void 0) {
    log_1_props.items = ctx[6].items;
  }
  log_1 = new Log({ props: log_1_props });
  binding_callbacks.push(() => bind(log_1, "items", log_1_items_binding));
  let if_block = ctx[3] && create_if_block$g(ctx);
  actionsline = new ActionsLine({
    props: { confirm: ctx[7] }
  });
  return {
    c() {
      center = element("center");
      div0 = element("div");
      create_component(starshelllogo.$$.fragment);
      t0 = space();
      create_component(starshelltitle.$$.fragment);
      t1 = space();
      p2 = element("p");
      p2.textContent = "Create a new password to protect your wallet's data.";
      t3 = space();
      div1 = element("div");
      input = element("input");
      t4 = space();
      create_component(field0.$$.fragment);
      t5 = space();
      create_component(field1.$$.fragment);
      t6 = space();
      create_component(log_1.$$.fragment);
      t7 = space();
      if (if_block)
        if_block.c();
      t8 = space();
      create_component(actionsline.$$.fragment);
      attr(div0, "class", "intro svelte-pdf2wg");
      attr(p2, "class", "narrow svelte-pdf2wg");
      input.hidden = true;
      attr(input, "type", "text");
      attr(input, "name", "username");
      attr(input, "autocomplete", "username");
      input.value = "StarShell Wallet User";
      attr(div1, "class", "form flex-rows");
    },
    m(target, anchor) {
      insert(target, center, anchor);
      append(center, div0);
      mount_component(starshelllogo, div0, null);
      append(div0, t0);
      mount_component(starshelltitle, div0, null);
      append(center, t1);
      append(center, p2);
      insert(target, t3, anchor);
      insert(target, div1, anchor);
      append(div1, input);
      append(div1, t4);
      mount_component(field0, div1, null);
      append(div1, t5);
      mount_component(field1, div1, null);
      insert(target, t6, anchor);
      mount_component(log_1, target, anchor);
      insert(target, t7, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, t8, anchor);
      mount_component(actionsline, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const field0_changes = {};
      if (dirty & 8388629) {
        field0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field0.$set(field0_changes);
      const field1_changes = {};
      if (dirty & 8388646) {
        field1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field1.$set(field1_changes);
      const log_1_changes = {};
      if (!updating_items && dirty & 64) {
        updating_items = true;
        log_1_changes.items = ctx2[6].items;
        add_flush_callback(() => updating_items = false);
      }
      log_1.$set(log_1_changes);
      if (ctx2[3]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$g(ctx2);
          if_block.c();
          if_block.m(t8.parentNode, t8);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      const actionsline_changes = {};
      if (dirty & 128)
        actionsline_changes.confirm = ctx2[7];
      actionsline.$set(actionsline_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(starshelllogo.$$.fragment, local);
      transition_in(starshelltitle.$$.fragment, local);
      transition_in(field0.$$.fragment, local);
      transition_in(field1.$$.fragment, local);
      transition_in(log_1.$$.fragment, local);
      transition_in(actionsline.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(starshelllogo.$$.fragment, local);
      transition_out(starshelltitle.$$.fragment, local);
      transition_out(field0.$$.fragment, local);
      transition_out(field1.$$.fragment, local);
      transition_out(log_1.$$.fragment, local);
      transition_out(actionsline.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(center);
      destroy_component(starshelllogo);
      destroy_component(starshelltitle);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(div1);
      destroy_component(field0);
      destroy_component(field1);
      if (detaching)
        detach(t6);
      destroy_component(log_1, detaching);
      if (detaching)
        detach(t7);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t8);
      destroy_component(actionsline, detaching);
    }
  };
}
function create_fragment$E(ctx) {
  let screen;
  let current;
  screen = new Screen({
    props: {
      $$slots: { default: [create_default_slot$i] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(screen.$$.fragment);
    },
    m(target, anchor) {
      mount_component(screen, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const screen_changes = {};
      if (dirty & 8388863) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(screen, detaching);
    }
  };
}
function instance$B($$self, $$props, $$invalidate) {
  let b_password_acceptable;
  let a_confirm_action;
  const k_page = getContext("page");
  const completed = getContext("completed");
  let sh_phrase = "";
  let sh_verify = "";
  let s_error = "";
  let s_err_password = "";
  let s_err_verify = "";
  let xt_start = 0;
  let k_logger = new Logger();
  function log(s_msg) {
    $$invalidate(6, k_logger = k_logger.event(s_msg, Date.now() - xt_start));
  }
  k_page.on({
    restore() {
      $$invalidate(0, sh_phrase = $$invalidate(1, sh_verify = ""));
    }
  });
  function check_password() {
    if (sh_phrase && !acceptable(sh_phrase)) {
      if (sh_phrase.length < NL_PASSPHRASE_MINIMUM) {
        $$invalidate(4, s_err_password = "Password must be at least 5 characters");
      } else if (sh_phrase.length > NL_PASSPHRASE_MAXIMUM) {
        $$invalidate(4, s_err_password = "Password must be 1024 characters or fewer");
      } else {
        $$invalidate(4, s_err_password = "Password is not acceptable");
      }
      return;
    }
    $$invalidate(4, s_err_password = "");
  }
  function check_verify() {
    if (sh_phrase && !s_err_password && sh_phrase !== sh_verify) {
      $$invalidate(5, s_err_verify = "Passwords do not match");
      return;
    }
    $$invalidate(5, s_err_verify = "");
  }
  const dp_passwords = (async () => {
    const d_res = await fetch("/data/passwords-top-10k.txt");
    const s_list = await d_res.text();
    return s_list.split("\n");
  })();
  async function prepare_register() {
    const a_passwords = await dp_passwords;
    if (a_passwords.includes(sh_phrase)) {
      k_page.push({
        creator: RegisterWeakPassword,
        props: { attempt_register }
      });
    } else {
      await attempt_register();
    }
  }
  let b_busy = false;
  async function attempt_register() {
    if (!b_password_acceptable)
      return 1;
    if (b_busy)
      return 1;
    b_busy = true;
    const exit = () => (b_busy = false, 1);
    $$invalidate(3, s_error = "");
    xt_start = Date.now();
    log("Estimating time to complete");
    {
      const xt_start_est = window.performance.now();
      await Vault.deriveRootBits(ATU8_DUMMY_PHRASE, ATU8_DUMMY_VECTOR, 1 / 50);
      const xt_finish_est = window.performance.now();
      const xt_elapsed_est = xt_finish_est - xt_start_est;
      const xt_estimate = 2 * (2 * (xt_elapsed_est * 50));
      log(`About ${(xt_estimate / 1e3).toFixed(1)} seconds`);
    }
    try {
      await register$1(sh_phrase, log);
    } catch (e_register) {
      if (e_register instanceof AlreadyRegisteredError) {
        $$invalidate(3, s_error = "A passphrase is already registered");
      } else if (e_register instanceof InvalidPassphraseError) {
        $$invalidate(3, s_error = "Invalid passphrase");
      } else {
        $$invalidate(3, s_error = `Unexpected error occurred while attempting to register:
${e_register.stack || e_register.message}`);
      }
      return exit();
    }
    log("Verifying passphrase");
    try {
      await login(sh_phrase, false, log);
    } catch (e_login) {
      $$invalidate(3, s_error = "Failed to verify passphrase immediately after registration");
      await Vault.eraseBase();
      return exit();
    }
    log("Done");
    $$invalidate(3, s_error = "Success");
    if (completed)
      completed(true);
    return exit();
  }
  const blur_handler = () => check_password();
  function input_input_handler() {
    sh_phrase = this.value;
    $$invalidate(0, sh_phrase);
  }
  const blur_handler_1 = () => check_verify();
  function input_input_handler_1() {
    sh_verify = this.value;
    $$invalidate(1, sh_verify);
  }
  function log_1_items_binding(value) {
    if ($$self.$$.not_equal(k_logger.items, value)) {
      k_logger.items = value;
      $$invalidate(6, k_logger);
    }
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 3) {
      $$invalidate(2, b_password_acceptable = !!sh_phrase && sh_phrase === sh_verify && acceptable(sh_phrase));
    }
    if ($$self.$$.dirty & 4) {
      $$invalidate(7, a_confirm_action = ["Continue", prepare_register, !b_password_acceptable]);
    }
  };
  return [
    sh_phrase,
    sh_verify,
    b_password_acceptable,
    s_error,
    s_err_password,
    s_err_verify,
    k_logger,
    a_confirm_action,
    check_password,
    check_verify,
    blur_handler,
    input_input_handler,
    blur_handler_1,
    input_input_handler_1,
    log_1_items_binding
  ];
}
class Register extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$B, create_fragment$E, safe_not_equal, {});
  }
}
var SX_ICON_CONTACTS = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n	<path style="fill: var(--svg-color-fg,currentColor);" d="M19 5v14H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 10H6v-1.53c0-2.5 3.97-3.58 6-3.58s6 1.08 6 3.58V18zm-9.69-2h7.38c-.69-.56-2.38-1.12-3.69-1.12s-3.01.56-3.69 1.12z"/>\n</svg>';
var SX_ICON_CONTRACT = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n	<style type="text/css">\n		.s2r-analytics-fg {\n			fill: var(--svg-color-fg, currentColor);\n		}\n	</style>\n	<path class="s2r-analytics-fg" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>\n	<path class="s2r-analytics-fg" d="M7 12h2v5H7zm8-5h2v10h-2zm-4 7h2v3h-2zm0-4h2v2h-2z"/>\n</svg>';
var SX_ICON_LOADING = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n	<path style="fill: var(--svg-color-fg,currentColor);" d="M13 5.08A7 7 0 0 1 18.92 11h3.03c-.47-4.72-4.23-8.48-8.95-8.95v3.03zM18.92 13A7 7 0 0 1 13 18.92v3.03c4.72-.47 8.48-4.23 8.95-8.95h-3.03zM11 18.92c-3.39-.49-6-3.4-6-6.92s2.61-6.43 6-6.92V2.05c-5.05.5-9 4.76-9 9.95 0 5.19 3.95 9.45 9 9.95v-3.03z"/>\n</svg>';
function create_catch_block$b(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block$b(ctx) {
  let starselect;
  let updating_value;
  let current;
  function starselect_value_binding(value) {
    ctx[4](value);
  }
  let starselect_props = {
    id: "asset-select",
    pfpMap: ctx[1],
    placeholder: "Select asset",
    items: ctx[8]
  };
  if (ctx[0] !== void 0) {
    starselect_props.value = ctx[0];
  }
  starselect = new StarSelect({ props: starselect_props });
  binding_callbacks.push(() => bind(starselect, "value", starselect_value_binding));
  return {
    c() {
      create_component(starselect.$$.fragment);
    },
    m(target, anchor) {
      mount_component(starselect, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const starselect_changes = {};
      if (dirty & 2)
        starselect_changes.pfpMap = ctx2[1];
      if (!updating_value && dirty & 1) {
        updating_value = true;
        starselect_changes.value = ctx2[0];
        add_flush_callback(() => updating_value = false);
      }
      starselect.$set(starselect_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(starselect.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(starselect.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(starselect, detaching);
    }
  };
}
function create_pending_block$b(ctx) {
  let t;
  return {
    c() {
      t = text("Loading assets...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$D(ctx) {
  let div;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$b,
    then: create_then_block$b,
    catch: create_catch_block$b,
    value: 8,
    blocks: [, , ,]
  };
  handle_promise(ctx[2](), info);
  return {
    c() {
      div = element("div");
      info.block.c();
      attr(div, "class", "asset");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      info.block.m(div, info.anchor = null);
      info.mount = () => div;
      info.anchor = null;
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      info.block.d();
      info.token = null;
      info = null;
    }
  };
}
function instance$A($$self, $$props, $$invalidate) {
  let $yw_owner;
  let $yw_chain;
  component_subscribe($$self, yw_owner, ($$value) => $$invalidate(5, $yw_owner = $$value));
  component_subscribe($$self, yw_chain, ($$value) => $$invalidate(6, $yw_chain = $$value));
  let { assetRef = "" } = $$props;
  $yw_chain?.id || "*";
  let h_asset_pfps = {};
  async function load_assets() {
    const a_items = [];
    $$invalidate(1, h_asset_pfps = await load_pfps($yw_chain.coins, { dim: 19 }));
    for (const [si_coin, g_coin] of ode($yw_chain.coins)) {
      a_items.push({
        value: Entities.holdingPathFor($yw_owner, si_coin),
        object: g_coin,
        primary: si_coin,
        secondary: g_coin.name,
        pfp: g_coin.pfp
      });
    }
    return a_items;
  }
  let g_item = {
    value: assetRef,
    object: null,
    primary: "",
    secondary: "",
    pfp: ""
  };
  function starselect_value_binding(value) {
    g_item = value;
    $$invalidate(0, g_item);
  }
  $$self.$$set = ($$props2) => {
    if ("assetRef" in $$props2)
      $$invalidate(3, assetRef = $$props2.assetRef);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      {
        $$invalidate(3, assetRef = g_item?.value || "");
      }
    }
  };
  return [g_item, h_asset_pfps, load_assets, assetRef, starselect_value_binding];
}
class AssetSelect extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$A, create_fragment$D, safe_not_equal, { assetRef: 3 });
  }
}
var SX_ICON_INCREMENT = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n	<path style="fill: var(--svg-color-fg,currentColor);" d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>\n</svg>';
var SX_ICON_DECREMENT = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n	<path style="fill: var(--svg-color-fg,currentColor);" d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>\n</svg>';
function create_if_block_1$7(ctx) {
  let span6;
  let span2;
  let span0;
  let t0;
  let t1;
  let t2;
  let span1;
  let t4;
  let span5;
  let span3;
  let t5;
  let span4;
  let mounted;
  let dispose;
  return {
    c() {
      span6 = element("span");
      span2 = element("span");
      span0 = element("span");
      t0 = text("= ");
      t1 = text(ctx[5]);
      t2 = space();
      span1 = element("span");
      span1.textContent = "USD";
      t4 = space();
      span5 = element("span");
      span3 = element("span");
      t5 = space();
      span4 = element("span");
      attr(span0, "class", "amount svelte-18lggj7");
      attr(span1, "class", "fiat svelte-18lggj7");
      attr(span2, "class", "equivalent svelte-18lggj7");
      attr(span3, "class", "icon increment clickable svelte-18lggj7");
      attr(span4, "class", "icon decrement clickable svelte-18lggj7");
      attr(span5, "class", "adjust svelte-18lggj7");
      attr(span6, "class", "occupy svelte-18lggj7");
    },
    m(target, anchor) {
      insert(target, span6, anchor);
      append(span6, span2);
      append(span2, span0);
      append(span0, t0);
      append(span0, t1);
      append(span2, t2);
      append(span2, span1);
      append(span6, t4);
      append(span6, span5);
      append(span5, span3);
      span3.innerHTML = SX_ICON_INCREMENT;
      append(span5, t5);
      append(span5, span4);
      span4.innerHTML = SX_ICON_DECREMENT;
      if (!mounted) {
        dispose = [
          listen(span3, "click", ctx[16]),
          listen(span3, "mousedown", ctx[17]),
          listen(span4, "click", ctx[18]),
          listen(span4, "mousedown", ctx[19])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 32)
        set_data(t1, ctx2[5]);
    },
    d(detaching) {
      if (detaching)
        detach(span6);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$f(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[1]);
      attr(span, "class", "validation-message");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2)
        set_data(t, ctx2[1]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_fragment$C(ctx) {
  let div;
  let input;
  let input_disabled_value;
  let input_max_value;
  let input_step_value;
  let t0;
  let t1;
  let mounted;
  let dispose;
  let if_block0 = ctx[3] && create_if_block_1$7(ctx);
  let if_block1 = ctx[1] && create_if_block$f(ctx);
  return {
    c() {
      div = element("div");
      input = element("input");
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      input.disabled = input_disabled_value = !ctx[2];
      attr(input, "type", "number");
      attr(input, "min", "0");
      attr(input, "max", input_max_value = ctx[4] + "" || "0");
      attr(input, "step", input_step_value = "0." + "0".repeat((ctx[3]?.decimals || 1) - 1) + "1");
      input.required = true;
      input.value = ctx[0];
      attr(input, "class", "svelte-18lggj7");
      toggle_class(input, "invalid", ctx[1]);
      attr(div, "class", "amount-input svelte-18lggj7");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, input);
      ctx[15](input);
      append(div, t0);
      if (if_block0)
        if_block0.m(div, null);
      append(div, t1);
      if (if_block1)
        if_block1.m(div, null);
      if (!mounted) {
        dispose = [
          listen(input, "change", ctx[14]),
          listen(input, "input", ctx[7]),
          listen(input, "invalid", invalid_handler)
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 4 && input_disabled_value !== (input_disabled_value = !ctx2[2])) {
        input.disabled = input_disabled_value;
      }
      if (dirty & 16 && input_max_value !== (input_max_value = ctx2[4] + "" || "0")) {
        attr(input, "max", input_max_value);
      }
      if (dirty & 8 && input_step_value !== (input_step_value = "0." + "0".repeat((ctx2[3]?.decimals || 1) - 1) + "1")) {
        attr(input, "step", input_step_value);
      }
      if (dirty & 1 && input.value !== ctx2[0]) {
        input.value = ctx2[0];
      }
      if (dirty & 2) {
        toggle_class(input, "invalid", ctx2[1]);
      }
      if (ctx2[3]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1$7(ctx2);
          if_block0.c();
          if_block0.m(div, t1);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (ctx2[1]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block$f(ctx2);
          if_block1.c();
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[15](null);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function long_press(f_action) {
  let i_ticker = 0;
  const i_buffer = window.setTimeout(
    () => {
      i_ticker = window.setInterval(f_action, 90);
    },
    1e3
  );
  window.addEventListener(
    "mouseup",
    () => {
      clearTimeout(i_buffer);
      clearInterval(i_ticker);
    },
    { once: true }
  );
}
const invalid_handler = (d) => d.preventDefault();
function instance$z($$self, $$props, $$invalidate) {
  let $yw_chain;
  let $yw_owner;
  let $yw_network_active;
  component_subscribe($$self, yw_chain, ($$value) => $$invalidate(21, $yw_chain = $$value));
  component_subscribe($$self, yw_owner, ($$value) => $$invalidate(22, $yw_owner = $$value));
  component_subscribe($$self, yw_network_active, ($$value) => $$invalidate(23, $yw_network_active = $$value));
  let { value = "" } = $$props;
  const YG_ZERO = new BigNumber(0);
  const YG_ONE = new BigNumber(1);
  let { assetRef = "" } = $$props;
  let { bufferMax = 0 } = $$props;
  let g_asset;
  let yg_max = YG_ZERO;
  let yg_step = YG_ZERO;
  let s_fiat_equivalent = "";
  let si_coingecko = "";
  async function reload_asset() {
    $$invalidate(5, s_fiat_equivalent = "[...]");
    const g_entity = Entities.parseEntityPath(assetRef);
    if ("holding" === g_entity?.type) {
      const si_coin = g_entity.coin;
      $$invalidate(3, g_asset = $yw_chain.coins[si_coin]);
      const g_cached = $yw_network_active.cachedBalance($yw_owner, si_coin);
      if (g_cached && g_cached.timestamp > Date.now() - 5 * XT_MINUTES) {
        $$invalidate(4, yg_max = new BigNumber(g_cached.data.amount).shiftedBy(-g_asset.decimals).minus(new BigNumber(bufferMax)));
      }
      const g_bundle = await $yw_network_active.bankBalance($yw_owner, si_coin);
      if (assetRef === g_bundle.holding) {
        const yg_amount = new BigNumber(g_bundle.balance.amount).shiftedBy(-g_asset.decimals).minus(new BigNumber(bufferMax));
        if (!yg_amount.eq(yg_max)) {
          $$invalidate(4, yg_max = yg_amount);
        }
        const g_coin = $yw_chain.coins[si_coin];
        $$invalidate(13, si_coingecko = g_coin?.extra?.coingecko_id || "");
      }
    } else if ("token" === g_entity?.type) {
      $$invalidate(3, g_asset = null);
    }
    if (g_asset) {
      yg_step = YG_ONE.shiftedBy(-g_asset.decimals);
    } else {
      yg_step = YG_ZERO;
      $$invalidate(4, yg_max = YG_ZERO);
    }
  }
  function capture_input(d_event) {
    $$invalidate(0, value = d_event.target.value);
  }
  function increment() {
    const yg_next = yg_step.plus(value || 0);
    if (yg_next.lte(yg_max)) {
      $$invalidate(0, value = yg_next + "");
    } else {
      $$invalidate(0, value = yg_max + "");
    }
    check_validity();
  }
  function decrement() {
    const yg_next = yg_step.negated().plus(value || 0);
    if (yg_next.gte(0)) {
      if (yg_next.gt(yg_max)) {
        $$invalidate(0, value = yg_max + "");
      } else {
        $$invalidate(0, value = yg_next + "");
      }
    } else {
      $$invalidate(0, value = "0");
    }
    check_validity();
  }
  let { error = "" } = $$props;
  let dm_input;
  function invalidate(s_msg) {
    dm_input.setCustomValidity(s_msg);
    $$invalidate(1, error = s_msg);
  }
  function check_validity() {
    if (!value) {
      return invalidate("Enter an amount");
    }
    let yg_input;
    try {
      yg_input = new BigNumber(value);
    } catch (e_parse) {
      return invalidate("Invalid number");
    }
    if (yg_input.lt(YG_ZERO)) {
      return invalidate("Value must be positive");
    }
    if (yg_input.gt(yg_max)) {
      return invalidate("Insufficient balance");
    }
    $$invalidate(1, error = "");
  }
  let { showValidation = 0 } = $$props;
  const change_handler = () => check_validity();
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      dm_input = $$value;
      $$invalidate(6, dm_input);
    });
  }
  const click_handler2 = () => increment();
  const mousedown_handler = () => long_press(increment);
  const click_handler_1 = () => decrement();
  const mousedown_handler_1 = () => long_press(decrement);
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("assetRef" in $$props2)
      $$invalidate(2, assetRef = $$props2.assetRef);
    if ("bufferMax" in $$props2)
      $$invalidate(11, bufferMax = $$props2.bufferMax);
    if ("error" in $$props2)
      $$invalidate(1, error = $$props2.error);
    if ("showValidation" in $$props2)
      $$invalidate(12, showValidation = $$props2.showValidation);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 4) {
      {
        if (assetRef) {
          void reload_asset();
        } else {
          $$invalidate(3, g_asset = null);
        }
      }
    }
    if ($$self.$$.dirty & 8193) {
      {
        if (si_coingecko) {
          (async () => {
            const h_versus = await CoinGecko.coinsVersus([si_coingecko], "usd", 1 * XT_MINUTES);
            if (si_coingecko in h_versus) {
              $$invalidate(5, s_fiat_equivalent = format_amount(+value * +h_versus[si_coingecko], true));
            } else {
              $$invalidate(5, s_fiat_equivalent = "(?)");
            }
          })();
        } else {
          $$invalidate(5, s_fiat_equivalent = "");
        }
      }
    }
    if ($$self.$$.dirty & 4097) {
      {
        if (showValidation) {
          check_validity();
        } else if (!value) {
          $$invalidate(1, error = "");
        }
      }
    }
  };
  return [
    value,
    error,
    assetRef,
    g_asset,
    yg_max,
    s_fiat_equivalent,
    dm_input,
    capture_input,
    increment,
    decrement,
    check_validity,
    bufferMax,
    showValidation,
    si_coingecko,
    change_handler,
    input_binding,
    click_handler2,
    mousedown_handler,
    click_handler_1,
    mousedown_handler_1
  ];
}
class AmountInput extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$z, create_fragment$C, safe_not_equal, {
      value: 0,
      assetRef: 2,
      bufferMax: 11,
      error: 1,
      showValidation: 12
    });
  }
}
function create_catch_block$a(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block$a(ctx) {
  let starselect;
  let updating_value;
  let current;
  function starselect_value_binding(value) {
    ctx[4](value);
  }
  let starselect_props = {
    id: "sender-select",
    placeholder: "Select account",
    secondaryClass: "balance",
    items: ctx[1]
  };
  if (ctx[0] !== void 0) {
    starselect_props.value = ctx[0];
  }
  starselect = new StarSelect({ props: starselect_props });
  binding_callbacks.push(() => bind(starselect, "value", starselect_value_binding));
  return {
    c() {
      create_component(starselect.$$.fragment);
    },
    m(target, anchor) {
      mount_component(starselect, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const starselect_changes = {};
      if (!updating_value && dirty & 1) {
        updating_value = true;
        starselect_changes.value = ctx2[0];
        add_flush_callback(() => updating_value = false);
      }
      starselect.$set(starselect_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(starselect.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(starselect.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(starselect, detaching);
    }
  };
}
function create_pending_block$a(ctx) {
  let t;
  return {
    c() {
      t = text("Loading accounts...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$B(ctx) {
  let div;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$a,
    then: create_then_block$a,
    catch: create_catch_block$a,
    value: 1,
    blocks: [, , ,]
  };
  handle_promise(ctx[2](), info);
  return {
    c() {
      div = element("div");
      info.block.c();
      attr(div, "class", "sender");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      info.block.m(div, info.anchor = null);
      info.mount = () => div;
      info.anchor = null;
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      info.block.d();
      info.token = null;
      info = null;
    }
  };
}
function instance$y($$self, $$props, $$invalidate) {
  let $yw_account_ref;
  component_subscribe($$self, yw_account_ref, ($$value) => $$invalidate(5, $yw_account_ref = $$value));
  let { accountRef = $yw_account_ref } = $$props;
  const mk_account = (p_acc, g_acc) => ({
    value: p_acc,
    primary: g_acc.name,
    secondary: g_acc.extra?.total_fiat_cache || "(?)"
  });
  let g_selected;
  let a_options;
  async function load_accounts() {
    const ks_accounts = await Accounts.read();
    $$invalidate(1, a_options = oderac(ks_accounts.raw, mk_account));
    $$invalidate(0, g_selected = a_options.find((g) => accountRef === g.value));
    return a_options;
  }
  function starselect_value_binding(value) {
    g_selected = value;
    $$invalidate(0, g_selected);
  }
  $$self.$$set = ($$props2) => {
    if ("accountRef" in $$props2)
      $$invalidate(3, accountRef = $$props2.accountRef);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      if (g_selected) {
        $$invalidate(3, accountRef = g_selected.value);
      }
    }
  };
  return [g_selected, a_options, load_accounts, accountRef, starselect_value_binding];
}
class SenderSelect extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$y, create_fragment$B, safe_not_equal, { accountRef: 3 });
  }
}
function create_else_block$6(ctx) {
  let span;
  return {
    c() {
      span = element("span");
      span.textContent = "Failed to locate contact";
      attr(span, "class", "warning");
    },
    m(target, anchor) {
      insert(target, span, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_2$3(ctx) {
  let span;
  let address_1;
  let current;
  address_1 = new Address({ props: { address: ctx[0] } });
  return {
    c() {
      span = element("span");
      create_component(address_1.$$.fragment);
      attr(span, "class", "manual");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      mount_component(address_1, span, null);
      current = true;
    },
    p(ctx2, dirty) {
      const address_1_changes = {};
      if (dirty & 1)
        address_1_changes.address = ctx2[0];
      address_1.$set(address_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(address_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(address_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      destroy_component(address_1);
    }
  };
}
function create_if_block$e(ctx) {
  let div;
  let span0;
  let t0;
  let span2;
  let span1;
  let t1_value = ctx[1].name + "";
  let t1;
  let t2;
  let address_1;
  let current;
  let if_block = ctx[1] && create_if_block_1$6(ctx);
  address_1 = new Address({
    props: {
      address: Chains.bech32(ctx[1].address)
    }
  });
  return {
    c() {
      div = element("div");
      span0 = element("span");
      if (if_block)
        if_block.c();
      t0 = space();
      span2 = element("span");
      span1 = element("span");
      t1 = text(t1_value);
      t2 = space();
      create_component(address_1.$$.fragment);
      attr(span0, "class", "contact-pfp svelte-1ontxbe");
      attr(span1, "class", "name svelte-1ontxbe");
      attr(span2, "class", "info svelte-1ontxbe");
      attr(div, "class", "contact svelte-1ontxbe");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, span0);
      if (if_block)
        if_block.m(span0, null);
      append(div, t0);
      append(div, span2);
      append(span2, span1);
      append(span1, t1);
      append(span2, t2);
      mount_component(address_1, span2, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1$6(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(span0, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if ((!current || dirty & 2) && t1_value !== (t1_value = ctx2[1].name + ""))
        set_data(t1, t1_value);
      const address_1_changes = {};
      if (dirty & 2)
        address_1_changes.address = Chains.bech32(ctx2[1].address);
      address_1.$set(address_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(address_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(address_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
      destroy_component(address_1);
    }
  };
}
function create_if_block_1$6(ctx) {
  let pfpdisplay;
  let current;
  pfpdisplay = new PfpDisplay({
    props: {
      dim: 28,
      resource: ctx[1],
      genStyle: "font-size:18px;"
    }
  });
  return {
    c() {
      create_component(pfpdisplay.$$.fragment);
    },
    m(target, anchor) {
      mount_component(pfpdisplay, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const pfpdisplay_changes = {};
      if (dirty & 2)
        pfpdisplay_changes.resource = ctx2[1];
      pfpdisplay.$set(pfpdisplay_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(pfpdisplay.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(pfpdisplay.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(pfpdisplay, detaching);
    }
  };
}
function create_fragment$A(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$e, create_if_block_2$3, create_else_block$6];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[1])
      return 0;
    if (ctx2[0])
      return 1;
    return 2;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$x($$self, $$props, $$invalidate) {
  let $yw_family;
  component_subscribe($$self, yw_family, ($$value) => $$invalidate(3, $yw_family = $$value));
  let { contact = null } = $$props;
  let g_contact = contact;
  let { address = "" } = $$props;
  async function reload_contacts() {
    const ks_agents = await Agents.read();
    const di_contacts = ks_agents.contacts($yw_family);
    if (!g_contact && address) {
      for (const [, g_contact_each] of di_contacts) {
        if (address === Chains.bech32(g_contact_each.address)) {
          $$invalidate(1, g_contact = g_contact_each);
          break;
        }
      }
    }
  }
  void reload_contacts();
  const f_unsub_agents = subscribe_store("agents", reload_contacts);
  onDestroy(() => {
    f_unsub_agents();
  });
  $$self.$$set = ($$props2) => {
    if ("contact" in $$props2)
      $$invalidate(2, contact = $$props2.contact);
    if ("address" in $$props2)
      $$invalidate(0, address = $$props2.address);
  };
  return [address, g_contact, contact];
}
class InlineContactSelection extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$x, create_fragment$A, safe_not_equal, { contact: 2, address: 0 });
  }
}
function create_fragment$z(ctx) {
  let div;
  let inlinecontactselection;
  let div_class_value;
  let current;
  inlinecontactselection = new InlineContactSelection({
    props: {
      contact: ctx[1].contact,
      address: ctx[1].value
    }
  });
  return {
    c() {
      div = element("div");
      create_component(inlinecontactselection.$$.fragment);
      attr(div, "class", div_class_value = "item " + ctx[2] + " svelte-pgx3pp");
      toggle_class(div, "display_none", ctx[0] || !ctx[1].value);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(inlinecontactselection, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const inlinecontactselection_changes = {};
      if (dirty & 2)
        inlinecontactselection_changes.contact = ctx2[1].contact;
      if (dirty & 2)
        inlinecontactselection_changes.address = ctx2[1].value;
      inlinecontactselection.$set(inlinecontactselection_changes);
      if (!current || dirty & 4 && div_class_value !== (div_class_value = "item " + ctx2[2] + " svelte-pgx3pp")) {
        attr(div, "class", div_class_value);
      }
      if (dirty & 7) {
        toggle_class(div, "display_none", ctx2[0] || !ctx2[1].value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(inlinecontactselection.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inlinecontactselection.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(inlinecontactselection);
    }
  };
}
function instance$w($$self, $$props, $$invalidate) {
  let { isActive = false } = $$props;
  let { isFirst = false } = $$props;
  let { isHover = false } = $$props;
  let { isSelectable = false } = $$props;
  let { getOptionLabel = void 0 } = $$props;
  let { item } = $$props;
  let { filterText = "" } = $$props;
  let itemClasses = "";
  $$self.$$set = ($$props2) => {
    if ("isActive" in $$props2)
      $$invalidate(0, isActive = $$props2.isActive);
    if ("isFirst" in $$props2)
      $$invalidate(3, isFirst = $$props2.isFirst);
    if ("isHover" in $$props2)
      $$invalidate(4, isHover = $$props2.isHover);
    if ("isSelectable" in $$props2)
      $$invalidate(5, isSelectable = $$props2.isSelectable);
    if ("getOptionLabel" in $$props2)
      $$invalidate(6, getOptionLabel = $$props2.getOptionLabel);
    if ("item" in $$props2)
      $$invalidate(1, item = $$props2.item);
    if ("filterText" in $$props2)
      $$invalidate(7, filterText = $$props2.filterText);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 57) {
      {
        const classes = [];
        if (isActive) {
          classes.push("active");
        }
        if (isFirst) {
          classes.push("first");
        }
        if (isHover) {
          classes.push("hover");
        }
        if (!isSelectable) {
          classes.push("notSelectable");
        }
        $$invalidate(2, itemClasses = classes.join(" "));
      }
    }
  };
  return [
    isActive,
    item,
    itemClasses,
    isFirst,
    isHover,
    isSelectable,
    getOptionLabel,
    filterText
  ];
}
class RecipientSelectItem extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$w, create_fragment$z, safe_not_equal, {
      isActive: 0,
      isFirst: 3,
      isHover: 4,
      isSelectable: 5,
      getOptionLabel: 6,
      item: 1,
      filterText: 7
    });
  }
}
function create_fragment$y(ctx) {
  let div;
  let inlinecontactselection;
  let current;
  inlinecontactselection = new InlineContactSelection({
    props: {
      contact: ctx[0].contact,
      address: ctx[0].value
    }
  });
  return {
    c() {
      div = element("div");
      create_component(inlinecontactselection.$$.fragment);
      attr(div, "class", "selection svelte-aitqlq");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(inlinecontactselection, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const inlinecontactselection_changes = {};
      if (dirty & 1)
        inlinecontactselection_changes.contact = ctx2[0].contact;
      if (dirty & 1)
        inlinecontactselection_changes.address = ctx2[0].value;
      inlinecontactselection.$set(inlinecontactselection_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(inlinecontactselection.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inlinecontactselection.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(inlinecontactselection);
    }
  };
}
function instance$v($$self, $$props, $$invalidate) {
  let { getSelectionLabel } = $$props;
  let { item } = $$props;
  $$self.$$set = ($$props2) => {
    if ("getSelectionLabel" in $$props2)
      $$invalidate(1, getSelectionLabel = $$props2.getSelectionLabel);
    if ("item" in $$props2)
      $$invalidate(0, item = $$props2.item);
  };
  return [item, getSelectionLabel];
}
class RecipientSelectSelection extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$v, create_fragment$y, safe_not_equal, { getSelectionLabel: 1, item: 0 });
  }
}
function create_catch_block$9(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block$9(ctx) {
  let select_1;
  let updating_filterText;
  let updating_listOpen;
  let current;
  function select_1_filterText_binding(value) {
    ctx[14](value);
  }
  function select_1_listOpen_binding(value) {
    ctx[15](value);
  }
  let select_1_props = {
    id: "recipient-select",
    placeholder: "Address or contact",
    listOffset: 1,
    isClearable: !!ctx[0],
    isCreatable: !!ctx[3],
    Item: RecipientSelectItem,
    Selection: RecipientSelectSelection,
    items: ctx[8],
    value: ctx[4],
    noOptionsMessage: "Stop typing in the address. \n Use copy/paste instead!",
    containerClasses: ctx[1] ? "invalid" : ""
  };
  if (ctx[2] !== void 0) {
    select_1_props.filterText = ctx[2];
  }
  if (ctx[6] !== void 0) {
    select_1_props.listOpen = ctx[6];
  }
  select_1 = new Select({ props: select_1_props });
  binding_callbacks.push(() => bind(select_1, "filterText", select_1_filterText_binding));
  binding_callbacks.push(() => bind(select_1, "listOpen", select_1_listOpen_binding));
  select_1.$on("select", ctx[10]);
  select_1.$on("clear", ctx[11]);
  return {
    c() {
      create_component(select_1.$$.fragment);
    },
    m(target, anchor) {
      mount_component(select_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const select_1_changes = {};
      if (dirty & 1)
        select_1_changes.isClearable = !!ctx2[0];
      if (dirty & 8)
        select_1_changes.isCreatable = !!ctx2[3];
      if (dirty & 16)
        select_1_changes.value = ctx2[4];
      if (dirty & 2)
        select_1_changes.containerClasses = ctx2[1] ? "invalid" : "";
      if (!updating_filterText && dirty & 4) {
        updating_filterText = true;
        select_1_changes.filterText = ctx2[2];
        add_flush_callback(() => updating_filterText = false);
      }
      if (!updating_listOpen && dirty & 64) {
        updating_listOpen = true;
        select_1_changes.listOpen = ctx2[6];
        add_flush_callback(() => updating_listOpen = false);
      }
      select_1.$set(select_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(select_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(select_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(select_1, detaching);
    }
  };
}
function create_pending_block$9(ctx) {
  let t;
  return {
    c() {
      t = text("Loading contacts...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block$d(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[1]);
      attr(span, "class", "validation-message");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2)
        set_data(t, ctx2[1]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_fragment$x(ctx) {
  let div;
  let t;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$9,
    then: create_then_block$9,
    catch: create_catch_block$9,
    value: 8,
    blocks: [, , ,]
  };
  handle_promise(ctx[9](), info);
  let if_block = ctx[1] && create_if_block$d(ctx);
  return {
    c() {
      div = element("div");
      info.block.c();
      t = space();
      if (if_block)
        if_block.c();
      attr(div, "class", "sender svelte-1rmr362");
      toggle_class(div, "hide-cursor", ctx[5]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      info.block.m(div, info.anchor = null);
      info.mount = () => div;
      info.anchor = t;
      append(div, t);
      if (if_block)
        if_block.m(div, null);
      ctx[16](div);
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
      if (ctx[1]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$d(ctx);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & 32) {
        toggle_class(div, "hide-cursor", ctx[5]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      info.block.d();
      info.token = null;
      info = null;
      if (if_block)
        if_block.d();
      ctx[16](null);
    }
  };
}
function instance$u($$self, $$props, $$invalidate) {
  let $yw_chain;
  let $yw_family;
  component_subscribe($$self, yw_chain, ($$value) => $$invalidate(13, $yw_chain = $$value));
  component_subscribe($$self, yw_family, ($$value) => $$invalidate(17, $yw_family = $$value));
  let { address = "" } = $$props;
  const sa_input = address;
  let { error = "" } = $$props;
  let s_manual_input;
  let g_item_select;
  let a_contacts;
  const contact_to_option = (g) => ({
    value: Chains.bech32(g.address),
    label: g.name,
    contact: g
  });
  async function load_contacts() {
    const ks_agents = await Agents.read();
    const a_options = [{ value: "", label: "", contact: null }];
    $$invalidate(8, a_contacts = [...ks_agents.contacts($yw_family)]);
    for (const [, g_contact] of a_contacts) {
      const g_option = contact_to_option(g_contact);
      const sa_contact = Chains.bech32(g_contact.address);
      if (sa_input && sa_contact === sa_input) {
        $$invalidate(4, g_item_select = g_option);
      }
      a_options.push(g_option);
    }
    return a_options;
  }
  function select(d_event) {
    $$invalidate(0, address = d_event.detail.value);
    $$invalidate(1, error = "");
  }
  function clear() {
    $$invalidate(0, address = "");
  }
  let s_accepted_input = "";
  let b_hide_cursor = false;
  let b_list_open = false;
  function check_manual_input() {
    $$invalidate(3, s_accepted_input = "");
    if (!$yw_chain) {
      $$invalidate(1, error = "No chain set");
    } else if (!Chains.isValidAddressFor($yw_chain, s_manual_input, "acc")) {
      $$invalidate(1, error = "Invalid address for this chain");
    } else {
      $$invalidate(1, error = "");
      for (const [, g_contact] of a_contacts) {
        if (s_manual_input === Chains.bech32(g_contact.address)) {
          $$invalidate(2, s_manual_input = "");
          $$invalidate(4, g_item_select = contact_to_option(g_contact));
          $$invalidate(6, b_list_open = false);
          $$invalidate(5, b_hide_cursor = true);
          return;
        }
      }
      $$invalidate(3, s_accepted_input = s_manual_input);
      setTimeout(
        () => {
          qs(dm_sender, ".manual>.address").click();
          $$invalidate(6, b_list_open = false);
        },
        0
      );
    }
  }
  let dm_sender;
  let { showValidation = 0 } = $$props;
  function select_1_filterText_binding(value) {
    s_manual_input = value;
    $$invalidate(2, s_manual_input);
  }
  function select_1_listOpen_binding(value) {
    b_list_open = value;
    $$invalidate(6, b_list_open);
  }
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      dm_sender = $$value;
      $$invalidate(7, dm_sender);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("address" in $$props2)
      $$invalidate(0, address = $$props2.address);
    if ("error" in $$props2)
      $$invalidate(1, error = $$props2.error);
    if ("showValidation" in $$props2)
      $$invalidate(12, showValidation = $$props2.showValidation);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 12) {
      {
        $$invalidate(5, b_hide_cursor = false);
        if (s_manual_input) {
          check_manual_input();
        } else {
          $$invalidate(5, b_hide_cursor = !!s_accepted_input);
          $$invalidate(3, s_accepted_input = "");
        }
      }
    }
    if ($$self.$$.dirty & 12293) {
      {
        if (showValidation) {
          if (!address) {
            if (s_manual_input) {
              check_manual_input();
            } else {
              $$invalidate(1, error = "Enter a recipient");
            }
          } else if (!Chains.isValidAddressFor($yw_chain, address, "acc")) {
            $$invalidate(1, error = "Invalid address for this chain");
          } else {
            $$invalidate(1, error = "");
          }
        } else if (!address) {
          $$invalidate(1, error = "");
        }
      }
    }
  };
  return [
    address,
    error,
    s_manual_input,
    s_accepted_input,
    g_item_select,
    b_hide_cursor,
    b_list_open,
    dm_sender,
    a_contacts,
    load_contacts,
    select,
    clear,
    showValidation,
    $yw_chain,
    select_1_filterText_binding,
    select_1_listOpen_binding,
    div_binding
  ];
}
class RecipientSelect extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$u, create_fragment$x, safe_not_equal, { address: 0, error: 1, showValidation: 12 });
  }
}
function create_default_slot_6$3(ctx) {
  let div0;
  let t0_value = (ctx[1]?.name || "[...]") + "";
  let t0;
  let t1;
  let div1;
  let t2_value = (ctx[1]?.extra?.total_fiat_cache || "(?)") + "";
  let t2;
  return {
    c() {
      div0 = element("div");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      t2 = text(t2_value);
      attr(div0, "class", "title");
      attr(div1, "class", "subtitle svelte-m8l3qm");
    },
    m(target, anchor) {
      insert(target, div0, anchor);
      append(div0, t0);
      insert(target, t1, anchor);
      insert(target, div1, anchor);
      append(div1, t2);
    },
    p(ctx2, dirty) {
      if (dirty & 2 && t0_value !== (t0_value = (ctx2[1]?.name || "[...]") + ""))
        set_data(t0, t0_value);
      if (dirty & 2 && t2_value !== (t2_value = (ctx2[1]?.extra?.total_fiat_cache || "(?)") + ""))
        set_data(t2, t2_value);
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div1);
    }
  };
}
function create_default_slot_5$4(ctx) {
  let div0;
  let t0_value = (ctx[2] || "[...]") + "";
  let t0;
  let t1;
  let div1;
  let address;
  let current;
  address = new Address({
    props: { address: ctx[9] }
  });
  return {
    c() {
      div0 = element("div");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      create_component(address.$$.fragment);
      attr(div0, "class", "title");
      attr(div1, "class", "subtitle svelte-m8l3qm");
    },
    m(target, anchor) {
      insert(target, div0, anchor);
      append(div0, t0);
      insert(target, t1, anchor);
      insert(target, div1, anchor);
      mount_component(address, div1, null);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 4) && t0_value !== (t0_value = (ctx2[2] || "[...]") + ""))
        set_data(t0, t0_value);
    },
    i(local) {
      if (current)
        return;
      transition_in(address.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(address.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div1);
      destroy_component(address);
    }
  };
}
function create_else_block_3(ctx) {
  let t;
  return {
    c() {
      t = text("=[...]");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_3$1(ctx) {
  let t_value = format_fiat(new BigNumber(ctx[8]).times(ctx[3]).toNumber()) + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = format_fiat(new BigNumber(ctx2[8]).times(ctx2[3]).toNumber()) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_4$4(ctx) {
  let div0;
  let t3;
  let div1;
  function select_block_type(ctx2, dirty) {
    if (ctx2[3])
      return create_if_block_3$1;
    return create_else_block_3;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div0 = element("div");
      div0.textContent = `${ctx[8]}  ${ctx[7]}`;
      t3 = space();
      div1 = element("div");
      if_block.c();
      attr(div0, "class", "title");
      attr(div1, "class", "subtitle svelte-m8l3qm");
    },
    m(target, anchor) {
      insert(target, div0, anchor);
      insert(target, t3, anchor);
      insert(target, div1, anchor);
      if_block.m(div1, null);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div1, null);
        }
      }
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(div1);
      if_block.d();
    }
  };
}
function create_else_block_2(ctx) {
  let t;
  return {
    c() {
      t = text("=[...]");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_2$2(ctx) {
  let t_value = format_fiat(new BigNumber(ctx[10]).times(ctx[3]).toNumber()) + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && t_value !== (t_value = format_fiat(new BigNumber(ctx2[10]).times(ctx2[3]).toNumber()) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_3$5(ctx) {
  let div0;
  let t3;
  let div1;
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[3])
      return create_if_block_2$2;
    return create_else_block_2;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div0 = element("div");
      div0.textContent = `${ctx[10]}  ${ctx[7]}`;
      t3 = space();
      div1 = element("div");
      if_block.c();
      attr(div0, "class", "title");
      attr(div1, "class", "subtitle svelte-m8l3qm");
    },
    m(target, anchor) {
      insert(target, div0, anchor);
      insert(target, t3, anchor);
      insert(target, div1, anchor);
      if_block.m(div1, null);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type_1(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div1, null);
        }
      }
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(div1);
      if_block.d();
    }
  };
}
function create_else_block_1(ctx) {
  let t;
  return {
    c() {
      t = text("=[...]");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_1$5(ctx) {
  let t_value = format_fiat(new BigNumber(ctx[4]).times(ctx[3]).toNumber()) + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 24 && t_value !== (t_value = format_fiat(new BigNumber(ctx2[4]).times(ctx2[3]).toNumber()) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_2$5(ctx) {
  let div0;
  let t0_value = (ctx[4] || "[...]") + "";
  let t0;
  let t1;
  let t2;
  let t3;
  let div1;
  function select_block_type_2(ctx2, dirty) {
    if (ctx2[3])
      return create_if_block_1$5;
    return create_else_block_1;
  }
  let current_block_type = select_block_type_2(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div0 = element("div");
      t0 = text(t0_value);
      t1 = space();
      t2 = text(ctx[7]);
      t3 = space();
      div1 = element("div");
      if_block.c();
      attr(div0, "class", "title");
      attr(div1, "class", "subtitle svelte-m8l3qm");
    },
    m(target, anchor) {
      insert(target, div0, anchor);
      append(div0, t0);
      append(div0, t1);
      append(div0, t2);
      insert(target, t3, anchor);
      insert(target, div1, anchor);
      if_block.m(div1, null);
    },
    p(ctx2, dirty) {
      if (dirty & 16 && t0_value !== (t0_value = (ctx2[4] || "[...]") + ""))
        set_data(t0, t0_value);
      if (current_block_type === (current_block_type = select_block_type_2(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div1, null);
        }
      }
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(div1);
      if_block.d();
    }
  };
}
function create_else_block$5(ctx) {
  let span;
  return {
    c() {
      span = element("span");
      span.textContent = "(empty)";
      attr(span, "class", "empty-memo svelte-m8l3qm");
    },
    m(target, anchor) {
      insert(target, span, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block$c(ctx) {
  let textarea;
  return {
    c() {
      textarea = element("textarea");
      textarea.disabled = true;
      textarea.value = ctx[0];
    },
    m(target, anchor) {
      insert(target, textarea, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        textarea.value = ctx2[0];
      }
    },
    d(detaching) {
      if (detaching)
        detach(textarea);
    }
  };
}
function create_default_slot_1$7(ctx) {
  let if_block_anchor;
  function select_block_type_3(ctx2, dirty) {
    if (ctx2[0])
      return create_if_block$c;
    return create_else_block$5;
  }
  let current_block_type = select_block_type_3(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type_3(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_default_slot$h(ctx) {
  let header;
  let t0;
  let field0;
  let t1;
  let hr0;
  let t2;
  let field1;
  let t3;
  let hr1;
  let t4;
  let field2;
  let t5;
  let hr2;
  let t6;
  let field3;
  let t7;
  let hr3;
  let t8;
  let field4;
  let t9;
  let hr4;
  let t10;
  let field5;
  let t11;
  let actionsline;
  let current;
  header = new Header({
    props: {
      pops: true,
      exits: true,
      title: "Sending",
      symbol: ctx[7],
      subtitle: ctx[5].name
    }
  });
  header.$on("close", ctx[17]);
  field0 = new Field({
    props: {
      short: true,
      key: "sender",
      name: "From",
      $$slots: { default: [create_default_slot_6$3] },
      $$scope: { ctx }
    }
  });
  field1 = new Field({
    props: {
      short: true,
      key: "recipient",
      name: "To",
      $$slots: { default: [create_default_slot_5$4] },
      $$scope: { ctx }
    }
  });
  field2 = new Field({
    props: {
      short: true,
      key: "amount",
      name: "Amount",
      $$slots: { default: [create_default_slot_4$4] },
      $$scope: { ctx }
    }
  });
  field3 = new Field({
    props: {
      short: true,
      key: "fee-review",
      name: "Fee",
      $$slots: { default: [create_default_slot_3$5] },
      $$scope: { ctx }
    }
  });
  field4 = new Field({
    props: {
      short: true,
      key: "total",
      name: "Total",
      $$slots: { default: [create_default_slot_2$5] },
      $$scope: { ctx }
    }
  });
  field5 = new Field({
    props: {
      short: true,
      key: "memo",
      name: "Memo",
      $$slots: { default: [create_default_slot_1$7] },
      $$scope: { ctx }
    }
  });
  actionsline = new ActionsLine({
    props: {
      back: true,
      confirm: ["Approve", ctx[18]]
    }
  });
  return {
    c() {
      create_component(header.$$.fragment);
      t0 = space();
      create_component(field0.$$.fragment);
      t1 = space();
      hr0 = element("hr");
      t2 = space();
      create_component(field1.$$.fragment);
      t3 = space();
      hr1 = element("hr");
      t4 = space();
      create_component(field2.$$.fragment);
      t5 = space();
      hr2 = element("hr");
      t6 = space();
      create_component(field3.$$.fragment);
      t7 = space();
      hr3 = element("hr");
      t8 = space();
      create_component(field4.$$.fragment);
      t9 = space();
      hr4 = element("hr");
      t10 = space();
      create_component(field5.$$.fragment);
      t11 = space();
      create_component(actionsline.$$.fragment);
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert(target, t0, anchor);
      mount_component(field0, target, anchor);
      insert(target, t1, anchor);
      insert(target, hr0, anchor);
      insert(target, t2, anchor);
      mount_component(field1, target, anchor);
      insert(target, t3, anchor);
      insert(target, hr1, anchor);
      insert(target, t4, anchor);
      mount_component(field2, target, anchor);
      insert(target, t5, anchor);
      insert(target, hr2, anchor);
      insert(target, t6, anchor);
      mount_component(field3, target, anchor);
      insert(target, t7, anchor);
      insert(target, hr3, anchor);
      insert(target, t8, anchor);
      mount_component(field4, target, anchor);
      insert(target, t9, anchor);
      insert(target, hr4, anchor);
      insert(target, t10, anchor);
      mount_component(field5, target, anchor);
      insert(target, t11, anchor);
      mount_component(actionsline, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const header_changes = {};
      if (dirty & 32)
        header_changes.subtitle = ctx2[5].name;
      header.$set(header_changes);
      const field0_changes = {};
      if (dirty & 16777218) {
        field0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field0.$set(field0_changes);
      const field1_changes = {};
      if (dirty & 16777220) {
        field1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field1.$set(field1_changes);
      const field2_changes = {};
      if (dirty & 16777224) {
        field2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field2.$set(field2_changes);
      const field3_changes = {};
      if (dirty & 16777224) {
        field3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field3.$set(field3_changes);
      const field4_changes = {};
      if (dirty & 16777240) {
        field4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field4.$set(field4_changes);
      const field5_changes = {};
      if (dirty & 16777217) {
        field5_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field5.$set(field5_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(field0.$$.fragment, local);
      transition_in(field1.$$.fragment, local);
      transition_in(field2.$$.fragment, local);
      transition_in(field3.$$.fragment, local);
      transition_in(field4.$$.fragment, local);
      transition_in(field5.$$.fragment, local);
      transition_in(actionsline.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      transition_out(field0.$$.fragment, local);
      transition_out(field1.$$.fragment, local);
      transition_out(field2.$$.fragment, local);
      transition_out(field3.$$.fragment, local);
      transition_out(field4.$$.fragment, local);
      transition_out(field5.$$.fragment, local);
      transition_out(actionsline.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
      if (detaching)
        detach(t0);
      destroy_component(field0, detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(hr0);
      if (detaching)
        detach(t2);
      destroy_component(field1, detaching);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(hr1);
      if (detaching)
        detach(t4);
      destroy_component(field2, detaching);
      if (detaching)
        detach(t5);
      if (detaching)
        detach(hr2);
      if (detaching)
        detach(t6);
      destroy_component(field3, detaching);
      if (detaching)
        detach(t7);
      if (detaching)
        detach(hr3);
      if (detaching)
        detach(t8);
      destroy_component(field4, detaching);
      if (detaching)
        detach(t9);
      if (detaching)
        detach(hr4);
      if (detaching)
        detach(t10);
      destroy_component(field5, detaching);
      if (detaching)
        detach(t11);
      destroy_component(actionsline, detaching);
    }
  };
}
function create_fragment$w(ctx) {
  let screen;
  let current;
  screen = new Screen({
    props: {
      debug: "SendNative",
      slides: true,
      $$slots: { default: [create_default_slot$h] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(screen.$$.fragment);
    },
    m(target, anchor) {
      mount_component(screen, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const screen_changes = {};
      if (dirty & 16777279) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(screen, detaching);
    }
  };
}
function instance$t($$self, $$props, $$invalidate) {
  let s_total;
  let $yw_navigator;
  let $yw_network_active;
  let $yw_chain;
  component_subscribe($$self, yw_navigator, ($$value) => $$invalidate(21, $yw_navigator = $$value));
  component_subscribe($$self, yw_network_active, ($$value) => $$invalidate(22, $yw_network_active = $$value));
  component_subscribe($$self, yw_chain, ($$value) => $$invalidate(5, $yw_chain = $$value));
  const k_page = getContext("page");
  let { coin } = $$props;
  const si_coin = coin;
  const g_coin = $yw_chain.coins[si_coin];
  let { accountRef } = $$props;
  let g_account;
  let sa_sender;
  let { amount } = $$props;
  const s_amount = amount;
  let { recipient } = $$props;
  const sa_recipient = recipient;
  let s_recipient_title = "";
  let g_contact;
  let { fee } = $$props;
  const s_fee = fee;
  let { memo } = $$props;
  let x_worth = 0;
  (async (fk_resolve) => {
    const si_coingecko = g_coin.extra?.coingecko_id || "";
    if (si_coingecko) {
      const h_versus = await CoinGecko.coinsVersus([si_coingecko], "usd", 0);
      $$invalidate(3, x_worth = h_versus[si_coingecko]);
    }
  })();
  (async () => {
    const ks_accounts = await Accounts.read();
    $$invalidate(1, g_account = ks_accounts.at(accountRef));
    sa_sender = Chains.addressFor(g_account.pubkey);
    const p_contact = Agents.pathForContact(sa_recipient);
    g_contact = await Agents.getContact(p_contact);
    $$invalidate(2, s_recipient_title = g_contact?.name || "");
  })();
  async function approve() {
    const xg_amount = BigInt(new BigNumber(s_amount).shiftedBy(g_coin.decimals).toString());
    const g_attempt = await $yw_network_active.bankSend(sa_sender, sa_recipient, si_coin, xg_amount, memo);
    await Events.insert({
      type: "pending",
      time: Date.now(),
      data: g_attempt
    });
    k_page.reset();
    void $yw_navigator.activateThread(ThreadId.HISTORY);
  }
  const close_handler = () => k_page.reset();
  const func = () => approve();
  $$self.$$set = ($$props2) => {
    if ("coin" in $$props2)
      $$invalidate(12, coin = $$props2.coin);
    if ("accountRef" in $$props2)
      $$invalidate(13, accountRef = $$props2.accountRef);
    if ("amount" in $$props2)
      $$invalidate(14, amount = $$props2.amount);
    if ("recipient" in $$props2)
      $$invalidate(15, recipient = $$props2.recipient);
    if ("fee" in $$props2)
      $$invalidate(16, fee = $$props2.fee);
    if ("memo" in $$props2)
      $$invalidate(0, memo = $$props2.memo);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 65536) {
      $$invalidate(4, s_total = new BigNumber(s_amount).plus(fee).toString());
    }
  };
  return [
    memo,
    g_account,
    s_recipient_title,
    x_worth,
    s_total,
    $yw_chain,
    k_page,
    si_coin,
    s_amount,
    sa_recipient,
    s_fee,
    approve,
    coin,
    accountRef,
    amount,
    recipient,
    fee,
    close_handler,
    func
  ];
}
class SendNative extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$t, create_fragment$w, safe_not_equal, {
      coin: 12,
      accountRef: 13,
      amount: 14,
      recipient: 15,
      fee: 16,
      memo: 0
    });
  }
}
function create_default_slot_9(ctx) {
  let senderselect;
  let updating_accountRef;
  let current;
  function senderselect_accountRef_binding(value) {
    ctx[38](value);
  }
  let senderselect_props = {};
  if (ctx[13] !== void 0) {
    senderselect_props.accountRef = ctx[13];
  }
  senderselect = new SenderSelect({ props: senderselect_props });
  binding_callbacks.push(() => bind(senderselect, "accountRef", senderselect_accountRef_binding));
  return {
    c() {
      create_component(senderselect.$$.fragment);
    },
    m(target, anchor) {
      mount_component(senderselect, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const senderselect_changes = {};
      if (!updating_accountRef && dirty[0] & 8192) {
        updating_accountRef = true;
        senderselect_changes.accountRef = ctx2[13];
        add_flush_callback(() => updating_accountRef = false);
      }
      senderselect.$set(senderselect_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(senderselect.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(senderselect.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(senderselect, detaching);
    }
  };
}
function create_default_slot_8$1(ctx) {
  let recipientselect;
  let updating_error;
  let updating_address;
  let current;
  function recipientselect_error_binding(value) {
    ctx[39](value);
  }
  function recipientselect_address_binding(value) {
    ctx[40](value);
  }
  let recipientselect_props = {
    showValidation: ctx[4]
  };
  if (ctx[6] !== void 0) {
    recipientselect_props.error = ctx[6];
  }
  if (ctx[0] !== void 0) {
    recipientselect_props.address = ctx[0];
  }
  recipientselect = new RecipientSelect({ props: recipientselect_props });
  binding_callbacks.push(() => bind(recipientselect, "error", recipientselect_error_binding));
  binding_callbacks.push(() => bind(recipientselect, "address", recipientselect_address_binding));
  return {
    c() {
      create_component(recipientselect.$$.fragment);
    },
    m(target, anchor) {
      mount_component(recipientselect, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const recipientselect_changes = {};
      if (dirty[0] & 16)
        recipientselect_changes.showValidation = ctx2[4];
      if (!updating_error && dirty[0] & 64) {
        updating_error = true;
        recipientselect_changes.error = ctx2[6];
        add_flush_callback(() => updating_error = false);
      }
      if (!updating_address && dirty[0] & 1) {
        updating_address = true;
        recipientselect_changes.address = ctx2[0];
        add_flush_callback(() => updating_address = false);
      }
      recipientselect.$set(recipientselect_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(recipientselect.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(recipientselect.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(recipientselect, detaching);
    }
  };
}
function create_if_block_5(ctx) {
  let div;
  let checkboxfield;
  let updating_checked;
  let current;
  function checkboxfield_checked_binding(value) {
    ctx[41](value);
  }
  let checkboxfield_props = {
    id: "save-contact",
    $$slots: { default: [create_default_slot_7$1] },
    $$scope: { ctx }
  };
  if (ctx[5] !== void 0) {
    checkboxfield_props.checked = ctx[5];
  }
  checkboxfield = new CheckboxField({ props: checkboxfield_props });
  binding_callbacks.push(() => bind(checkboxfield, "checked", checkboxfield_checked_binding));
  return {
    c() {
      div = element("div");
      create_component(checkboxfield.$$.fragment);
      attr(div, "class", "new-address svelte-ipiv9p");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(checkboxfield, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const checkboxfield_changes = {};
      if (dirty[1] & 134217728) {
        checkboxfield_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_checked && dirty[0] & 32) {
        updating_checked = true;
        checkboxfield_changes.checked = ctx2[5];
        add_flush_callback(() => updating_checked = false);
      }
      checkboxfield.$set(checkboxfield_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(checkboxfield.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(checkboxfield.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(checkboxfield);
    }
  };
}
function create_default_slot_7$1(ctx) {
  let t;
  return {
    c() {
      t = text("Save to contacts");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_6$2(ctx) {
  let span2;
  let span0;
  let raw_value = ctx[17].icon + "";
  let t0;
  let span1;
  let t1_value = ctx[17].text + "";
  let t1;
  let span2_class_value;
  let t2;
  let if_block_anchor;
  let current;
  let if_block = ctx[9] && create_if_block_5(ctx);
  return {
    c() {
      span2 = element("span");
      span0 = element("span");
      t0 = space();
      span1 = element("span");
      t1 = text(t1_value);
      t2 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr(span0, "class", "icon svelte-ipiv9p");
      attr(span1, "class", "text svelte-ipiv9p");
      attr(span2, "class", span2_class_value = "status " + ctx[3] + " svelte-ipiv9p");
    },
    m(target, anchor) {
      insert(target, span2, anchor);
      append(span2, span0);
      span0.innerHTML = raw_value;
      append(span2, t0);
      append(span2, span1);
      append(span1, t1);
      insert(target, t2, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty[0] & 131072) && raw_value !== (raw_value = ctx2[17].icon + ""))
        span0.innerHTML = raw_value;
      if ((!current || dirty[0] & 131072) && t1_value !== (t1_value = ctx2[17].text + ""))
        set_data(t1, t1_value);
      if (!current || dirty[0] & 8 && span2_class_value !== (span2_class_value = "status " + ctx2[3] + " svelte-ipiv9p")) {
        attr(span2, "class", span2_class_value);
      }
      if (ctx2[9]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & 512) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_5(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span2);
      if (detaching)
        detach(t2);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block_3(ctx) {
  let field;
  let current;
  field = new Field({
    props: {
      short: true,
      slides: true,
      key: "new-contact-name",
      name: "Contact Name",
      $$slots: { default: [create_default_slot_5$3] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(field.$$.fragment);
    },
    m(target, anchor) {
      mount_component(field, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const field_changes = {};
      if (dirty[0] & 256 | dirty[1] & 134217728) {
        field_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field.$set(field_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(field.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(field.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(field, detaching);
    }
  };
}
function create_if_block_4(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[8]);
      attr(span, "class", "validation-message");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 256)
        set_data(t, ctx2[8]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_default_slot_5$3(ctx) {
  let input;
  let t;
  let if_block_anchor;
  let mounted;
  let dispose;
  let if_block = ctx[8] && create_if_block_4(ctx);
  return {
    c() {
      input = element("input");
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr(input, "id", "new-contact-name-value");
      attr(input, "type", "text");
      toggle_class(input, "invalid", ctx[8]);
    },
    m(target, anchor) {
      insert(target, input, anchor);
      insert(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      if (!mounted) {
        dispose = listen(input, "input", ctx[24]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 256) {
        toggle_class(input, "invalid", ctx2[8]);
      }
      if (ctx2[8]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_4(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(input);
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot_4$3(ctx) {
  let assetselect;
  let updating_assetRef;
  let current;
  function assetselect_assetRef_binding(value) {
    ctx[42](value);
  }
  let assetselect_props = {};
  if (ctx[1] !== void 0) {
    assetselect_props.assetRef = ctx[1];
  }
  assetselect = new AssetSelect({ props: assetselect_props });
  binding_callbacks.push(() => bind(assetselect, "assetRef", assetselect_assetRef_binding));
  return {
    c() {
      create_component(assetselect.$$.fragment);
    },
    m(target, anchor) {
      mount_component(assetselect, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const assetselect_changes = {};
      if (!updating_assetRef && dirty[0] & 2) {
        updating_assetRef = true;
        assetselect_changes.assetRef = ctx2[1];
        add_flush_callback(() => updating_assetRef = false);
      }
      assetselect.$set(assetselect_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(assetselect.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(assetselect.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(assetselect, detaching);
    }
  };
}
function create_default_slot_3$4(ctx) {
  let amountinput;
  let updating_error;
  let updating_value;
  let current;
  function amountinput_error_binding(value) {
    ctx[43](value);
  }
  function amountinput_value_binding(value) {
    ctx[44](value);
  }
  let amountinput_props = {
    bufferMax: ctx[10] ? x_fee : 0,
    assetRef: ctx[1],
    showValidation: ctx[4]
  };
  if (ctx[7] !== void 0) {
    amountinput_props.error = ctx[7];
  }
  if (ctx[2] !== void 0) {
    amountinput_props.value = ctx[2];
  }
  amountinput = new AmountInput({ props: amountinput_props });
  binding_callbacks.push(() => bind(amountinput, "error", amountinput_error_binding));
  binding_callbacks.push(() => bind(amountinput, "value", amountinput_value_binding));
  return {
    c() {
      create_component(amountinput.$$.fragment);
    },
    m(target, anchor) {
      mount_component(amountinput, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const amountinput_changes = {};
      if (dirty[0] & 1024)
        amountinput_changes.bufferMax = ctx2[10] ? x_fee : 0;
      if (dirty[0] & 2)
        amountinput_changes.assetRef = ctx2[1];
      if (dirty[0] & 16)
        amountinput_changes.showValidation = ctx2[4];
      if (!updating_error && dirty[0] & 128) {
        updating_error = true;
        amountinput_changes.error = ctx2[7];
        add_flush_callback(() => updating_error = false);
      }
      if (!updating_value && dirty[0] & 4) {
        updating_value = true;
        amountinput_changes.value = ctx2[2];
        add_flush_callback(() => updating_value = false);
      }
      amountinput.$set(amountinput_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(amountinput.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(amountinput.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(amountinput, detaching);
    }
  };
}
function create_if_block_2$1(ctx) {
  let span2;
  let span0;
  let t1;
  let span1;
  let t2;
  let t3;
  let t4;
  let t5;
  let span4;
  let span3;
  let mounted;
  let dispose;
  return {
    c() {
      span2 = element("span");
      span0 = element("span");
      span0.textContent = "Balance";
      t1 = space();
      span1 = element("span");
      t2 = text(ctx[11]);
      t3 = space();
      t4 = text(ctx[20]);
      t5 = space();
      span4 = element("span");
      span3 = element("span");
      span3.textContent = "USE MAX";
      attr(span0, "class", "label svelte-ipiv9p");
      attr(span1, "class", "amount svelte-ipiv9p");
      attr(span2, "class", "balance svelte-ipiv9p");
      attr(span3, "class", "link svelte-ipiv9p");
      toggle_class(span3, "disabled", ctx[19]);
      attr(span4, "class", "use-max");
    },
    m(target, anchor) {
      insert(target, span2, anchor);
      append(span2, span0);
      append(span2, t1);
      append(span2, span1);
      append(span1, t2);
      append(span1, t3);
      append(span1, t4);
      insert(target, t5, anchor);
      insert(target, span4, anchor);
      append(span4, span3);
      if (!mounted) {
        dispose = listen(span3, "click", ctx[45]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 2048)
        set_data(t2, ctx2[11]);
      if (dirty[0] & 1048576)
        set_data(t4, ctx2[20]);
      if (dirty[0] & 524288) {
        toggle_class(span3, "disabled", ctx2[19]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(span2);
      if (detaching)
        detach(t5);
      if (detaching)
        detach(span4);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot_2$4(ctx) {
  let span;
  let if_block = ctx[1] && create_if_block_2$1(ctx);
  return {
    c() {
      span = element("span");
      if (if_block)
        if_block.c();
      attr(span, "class", "balance-line svelte-ipiv9p");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      if (if_block)
        if_block.m(span, null);
    },
    p(ctx2, dirty) {
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_2$1(ctx2);
          if_block.c();
          if_block.m(span, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if (if_block)
        if_block.d();
    }
  };
}
function create_default_slot_1$6(ctx) {
  let div0;
  let t2;
  let div1;
  let t3;
  return {
    c() {
      div0 = element("div");
      div0.textContent = `${x_fee} SCRT`;
      t2 = space();
      div1 = element("div");
      t3 = text(ctx[18]);
      attr(div0, "class", "fee-amount");
      attr(div1, "class", "fee-fiat svelte-ipiv9p");
    },
    m(target, anchor) {
      insert(target, div0, anchor);
      insert(target, t2, anchor);
      insert(target, div1, anchor);
      append(div1, t3);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 262144)
        set_data(t3, ctx2[18]);
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(div1);
    }
  };
}
function create_post_slot(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      attr(div, "class", "manual-fee svelte-ipiv9p");
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block_1$4(ctx) {
  let span;
  let span_transition;
  let current;
  return {
    c() {
      span = element("span");
      span.textContent = "Caution: Memos are NOT private";
      attr(span, "class", "disclaimer svelte-ipiv9p");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!span_transition)
          span_transition = create_bidirectional_transition(span, slide, { duration: 350, delay: 400 }, true);
        span_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!span_transition)
        span_transition = create_bidirectional_transition(span, slide, { duration: 350, delay: 400 }, false);
      span_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if (detaching && span_transition)
        span_transition.end();
    }
  };
}
function create_if_block$b(ctx) {
  let div;
  let textarea;
  let div_transition;
  let current;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      textarea = element("textarea");
      attr(textarea, "class", "svelte-ipiv9p");
      attr(div, "class", "input");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, textarea);
      set_input_value(textarea, ctx[15]);
      current = true;
      if (!mounted) {
        dispose = listen(textarea, "input", ctx[47]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 32768) {
        set_input_value(textarea, ctx2[15]);
      }
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, slide, { duration: 350 }, true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, slide, { duration: 350 }, false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching && div_transition)
        div_transition.end();
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot$g(ctx) {
  let header;
  let t0;
  let field0;
  let t1;
  let field1;
  let t2;
  let field2;
  let t3;
  let t4;
  let hr0;
  let t5;
  let field3;
  let t6;
  let field4;
  let t7;
  let field5;
  let t8;
  let hr1;
  let t9;
  let field6;
  let t10;
  let hr2;
  let t11;
  let div1;
  let div0;
  let span0;
  let t12;
  let span1;
  let t14;
  let t15;
  let t16;
  let actionsline;
  let current;
  let mounted;
  let dispose;
  header = new Header({
    props: {
      pops: true,
      title: ctx[21] ? "Transferring" : "Sending",
      symbol: ctx[21] ? ctx[21].symbol : "",
      subtitle: ctx[12]?.name || "?"
    }
  });
  field0 = new Field({
    props: {
      short: true,
      key: "sender-select",
      name: "From",
      $$slots: { default: [create_default_slot_9] },
      $$scope: { ctx }
    }
  });
  field1 = new Field({
    props: {
      short: true,
      key: "recipient-select",
      name: "To",
      $$slots: { default: [create_default_slot_8$1] },
      $$scope: { ctx }
    }
  });
  field2 = new Field({
    props: {
      short: true,
      key: "recipient-status",
      name: "",
      $$slots: { default: [create_default_slot_6$2] },
      $$scope: { ctx }
    }
  });
  let if_block0 = ctx[9] && ctx[5] && create_if_block_3(ctx);
  field3 = new Field({
    props: {
      short: true,
      key: "asset-select",
      name: "Asset",
      $$slots: { default: [create_default_slot_4$3] },
      $$scope: { ctx }
    }
  });
  field4 = new Field({
    props: {
      short: true,
      key: "amount",
      name: "Amount",
      $$slots: { default: [create_default_slot_3$4] },
      $$scope: { ctx }
    }
  });
  field5 = new Field({
    props: {
      short: true,
      key: "balance",
      name: "",
      $$slots: { default: [create_default_slot_2$4] },
      $$scope: { ctx }
    }
  });
  field6 = new Field({
    props: {
      short: true,
      key: "fee",
      name: "Fee",
      $$slots: {
        post: [create_post_slot],
        default: [create_default_slot_1$6]
      },
      $$scope: { ctx }
    }
  });
  let if_block1 = ctx[14] && create_if_block_1$4();
  let if_block2 = ctx[14] && create_if_block$b(ctx);
  actionsline = new ActionsLine({
    props: {
      cancel: "pop",
      confirm: ["Next", ctx[48], !ctx[16]]
    }
  });
  return {
    c() {
      create_component(header.$$.fragment);
      t0 = space();
      create_component(field0.$$.fragment);
      t1 = space();
      create_component(field1.$$.fragment);
      t2 = space();
      create_component(field2.$$.fragment);
      t3 = space();
      if (if_block0)
        if_block0.c();
      t4 = space();
      hr0 = element("hr");
      t5 = space();
      create_component(field3.$$.fragment);
      t6 = space();
      create_component(field4.$$.fragment);
      t7 = space();
      create_component(field5.$$.fragment);
      t8 = space();
      hr1 = element("hr");
      t9 = space();
      create_component(field6.$$.fragment);
      t10 = space();
      hr2 = element("hr");
      t11 = space();
      div1 = element("div");
      div0 = element("div");
      span0 = element("span");
      t12 = space();
      span1 = element("span");
      span1.textContent = "Add memo";
      t14 = space();
      if (if_block1)
        if_block1.c();
      t15 = space();
      if (if_block2)
        if_block2.c();
      t16 = space();
      create_component(actionsline.$$.fragment);
      attr(span0, "class", "icon dropdown svelte-ipiv9p");
      attr(span1, "class", "text");
      attr(div0, "class", "title clickable svelte-ipiv9p");
      attr(div1, "class", "memo svelte-ipiv9p");
      toggle_class(div1, "expanded", ctx[14]);
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert(target, t0, anchor);
      mount_component(field0, target, anchor);
      insert(target, t1, anchor);
      mount_component(field1, target, anchor);
      insert(target, t2, anchor);
      mount_component(field2, target, anchor);
      insert(target, t3, anchor);
      if (if_block0)
        if_block0.m(target, anchor);
      insert(target, t4, anchor);
      insert(target, hr0, anchor);
      insert(target, t5, anchor);
      mount_component(field3, target, anchor);
      insert(target, t6, anchor);
      mount_component(field4, target, anchor);
      insert(target, t7, anchor);
      mount_component(field5, target, anchor);
      insert(target, t8, anchor);
      insert(target, hr1, anchor);
      insert(target, t9, anchor);
      mount_component(field6, target, anchor);
      insert(target, t10, anchor);
      insert(target, hr2, anchor);
      insert(target, t11, anchor);
      insert(target, div1, anchor);
      append(div1, div0);
      append(div0, span0);
      span0.innerHTML = SX_ICON_DROPDOWN;
      append(div0, t12);
      append(div0, span1);
      append(div0, t14);
      if (if_block1)
        if_block1.m(div0, null);
      append(div1, t15);
      if (if_block2)
        if_block2.m(div1, null);
      insert(target, t16, anchor);
      mount_component(actionsline, target, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(div0, "click", ctx[46]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      const header_changes = {};
      if (dirty[0] & 4096)
        header_changes.subtitle = ctx2[12]?.name || "?";
      header.$set(header_changes);
      const field0_changes = {};
      if (dirty[0] & 8192 | dirty[1] & 134217728) {
        field0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field0.$set(field0_changes);
      const field1_changes = {};
      if (dirty[0] & 81 | dirty[1] & 134217728) {
        field1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field1.$set(field1_changes);
      const field2_changes = {};
      if (dirty[0] & 131624 | dirty[1] & 134217728) {
        field2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field2.$set(field2_changes);
      if (ctx2[9] && ctx2[5]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty[0] & 544) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_3(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t4.parentNode, t4);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      const field3_changes = {};
      if (dirty[0] & 2 | dirty[1] & 134217728) {
        field3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field3.$set(field3_changes);
      const field4_changes = {};
      if (dirty[0] & 1174 | dirty[1] & 134217728) {
        field4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field4.$set(field4_changes);
      const field5_changes = {};
      if (dirty[0] & 1574914 | dirty[1] & 134217728) {
        field5_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field5.$set(field5_changes);
      const field6_changes = {};
      if (dirty[0] & 262144 | dirty[1] & 134217728) {
        field6_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field6.$set(field6_changes);
      if (ctx2[14]) {
        if (if_block1) {
          if (dirty[0] & 16384) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1$4();
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div0, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (ctx2[14]) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty[0] & 16384) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block$b(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div1, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (dirty[0] & 16384) {
        toggle_class(div1, "expanded", ctx2[14]);
      }
      const actionsline_changes = {};
      if (dirty[0] & 65536)
        actionsline_changes.confirm = ["Next", ctx2[48], !ctx2[16]];
      actionsline.$set(actionsline_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(field0.$$.fragment, local);
      transition_in(field1.$$.fragment, local);
      transition_in(field2.$$.fragment, local);
      transition_in(if_block0);
      transition_in(field3.$$.fragment, local);
      transition_in(field4.$$.fragment, local);
      transition_in(field5.$$.fragment, local);
      transition_in(field6.$$.fragment, local);
      transition_in(if_block1);
      transition_in(if_block2);
      transition_in(actionsline.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      transition_out(field0.$$.fragment, local);
      transition_out(field1.$$.fragment, local);
      transition_out(field2.$$.fragment, local);
      transition_out(if_block0);
      transition_out(field3.$$.fragment, local);
      transition_out(field4.$$.fragment, local);
      transition_out(field5.$$.fragment, local);
      transition_out(field6.$$.fragment, local);
      transition_out(if_block1);
      transition_out(if_block2);
      transition_out(actionsline.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
      if (detaching)
        detach(t0);
      destroy_component(field0, detaching);
      if (detaching)
        detach(t1);
      destroy_component(field1, detaching);
      if (detaching)
        detach(t2);
      destroy_component(field2, detaching);
      if (detaching)
        detach(t3);
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t4);
      if (detaching)
        detach(hr0);
      if (detaching)
        detach(t5);
      destroy_component(field3, detaching);
      if (detaching)
        detach(t6);
      destroy_component(field4, detaching);
      if (detaching)
        detach(t7);
      destroy_component(field5, detaching);
      if (detaching)
        detach(t8);
      if (detaching)
        detach(hr1);
      if (detaching)
        detach(t9);
      destroy_component(field6, detaching);
      if (detaching)
        detach(t10);
      if (detaching)
        detach(hr2);
      if (detaching)
        detach(t11);
      if (detaching)
        detach(div1);
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      if (detaching)
        detach(t16);
      destroy_component(actionsline, detaching);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$v(ctx) {
  let screen;
  let current;
  screen = new Screen({
    props: {
      form: true,
      slides: true,
      $$slots: { default: [create_default_slot$g] },
      $$scope: { ctx }
    }
  });
  screen.$on("submit", submit_handler);
  return {
    c() {
      create_component(screen.$$.fragment);
    },
    m(target, anchor) {
      mount_component(screen, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const screen_changes = {};
      if (dirty[0] & 2097151 | dirty[1] & 134217728) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(screen, detaching);
    }
  };
}
const si_versus = "usd";
let x_fee = 0.01;
const R_CONTACT_NAME = /^\S.{0,1023}$/;
const submit_handler = (d_submit) => {
  d_submit.preventDefault();
};
function instance$s($$self, $$props, $$invalidate) {
  let g_coin;
  let p_token;
  let s_symbol;
  let s_balance;
  let b_using_max;
  let si_coingecko;
  let s_fee_fiat;
  let g_address_type;
  let b_new_address;
  let s_err_new_contact;
  let b_form_valid;
  let $yw_network_active;
  let $yw_owner;
  let $yw_account;
  let $yw_chain;
  let $yw_account_ref;
  component_subscribe($$self, yw_network_active, ($$value) => $$invalidate(35, $yw_network_active = $$value));
  component_subscribe($$self, yw_owner, ($$value) => $$invalidate(36, $yw_owner = $$value));
  component_subscribe($$self, yw_account, ($$value) => $$invalidate(37, $yw_account = $$value));
  component_subscribe($$self, yw_chain, ($$value) => $$invalidate(12, $yw_chain = $$value));
  component_subscribe($$self, yw_account_ref, ($$value) => $$invalidate(53, $yw_account_ref = $$value));
  const k_page = getContext("page");
  let { sender = $yw_account } = $$props;
  let p_account = $yw_account_ref;
  let { native = Object.keys($yw_chain.coins)[0] } = $$props;
  let si_native = native;
  let { token = null } = $$props;
  let g_token2 = token;
  let { recipient = "" } = $$props;
  let sa_recipient = recipient;
  let p_asset = si_native ? Entities.holdingPathFor($yw_owner, si_native) : "";
  let h_addr_to_contact;
  let b_busy_agents = false;
  async function reload_agents(b_init = false) {
    if (b_busy_agents)
      return;
    b_busy_agents = true;
    const ks_agents = await Agents.read();
    const a_contacts = [...ks_agents.contacts()];
    $$invalidate(29, h_addr_to_contact = fold(a_contacts, ([p_contact, g_contact]) => ({
      [Chains.bech32(g_contact.address)]: p_contact
    })));
    b_busy_agents = false;
  }
  {
    const f_unsub_agents = subscribe_store("agents", reload_agents);
    const f_unsub_chain = yw_chain.subscribe(reload_agents);
    onDestroy(() => {
      f_unsub_agents();
      f_unsub_chain();
    });
  }
  let yg_balance = null;
  let s_amount = "";
  function use_max() {
    $$invalidate(2, s_amount = s_balance);
    if (g_coin) {
      $$invalidate(2, s_amount = new BigNumber(s_amount).minus(x_fee).toString());
    }
    $$invalidate(4, c_show_validations++, c_show_validations);
  }
  let x_worth = null;
  const H_ADDRESS_TYPES = {
    none: { icon: "<svg></svg>", text: "" },
    unknown: {
      icon: SX_ICON_LOADING,
      text: "Determining address type..."
    },
    personal: {
      icon: SX_ICON_CONTACTS,
      text: "Personal address"
    },
    contract: {
      icon: SX_ICON_CONTRACT,
      text: "Contract address"
    }
  };
  let si_address_type = "none";
  let b_memo_expanded = false;
  let s_memo = "";
  let b_submitted = false;
  function submit() {
    if (!b_form_valid) {
      $$invalidate(4, c_show_validations++, c_show_validations);
      return;
    } else {
      if (b_submitted)
        return false;
      b_submitted = true;
      if (si_native) {
        k_page.push({
          creator: SendNative,
          props: {
            accountRef: p_account,
            coin: si_native,
            recipient: sa_recipient,
            amount: s_amount,
            memo: s_memo,
            fee: x_fee + ""
          }
        });
      }
    }
  }
  let c_show_validations = 0;
  let b_checked_save_contact = false;
  let s_err_recipient = "";
  let s_err_amount = "";
  let s_new_contact = "";
  function input_new_contact(d_event) {
    $$invalidate(32, s_new_contact = d_event.target.value);
  }
  function senderselect_accountRef_binding(value) {
    p_account = value;
    $$invalidate(13, p_account);
  }
  function recipientselect_error_binding(value) {
    s_err_recipient = value;
    $$invalidate(6, s_err_recipient);
  }
  function recipientselect_address_binding(value) {
    sa_recipient = value;
    $$invalidate(0, sa_recipient);
  }
  function checkboxfield_checked_binding(value) {
    b_checked_save_contact = value;
    $$invalidate(5, b_checked_save_contact);
  }
  function assetselect_assetRef_binding(value) {
    p_asset = value;
    $$invalidate(1, p_asset);
  }
  function amountinput_error_binding(value) {
    s_err_amount = value;
    $$invalidate(7, s_err_amount);
  }
  function amountinput_value_binding(value) {
    s_amount = value;
    $$invalidate(2, s_amount);
  }
  const click_handler2 = () => use_max();
  const click_handler_1 = () => $$invalidate(14, b_memo_expanded = !b_memo_expanded);
  function textarea_input_handler() {
    s_memo = this.value;
    $$invalidate(15, s_memo);
  }
  const func = () => submit();
  $$self.$$set = ($$props2) => {
    if ("sender" in $$props2)
      $$invalidate(25, sender = $$props2.sender);
    if ("native" in $$props2)
      $$invalidate(26, native = $$props2.native);
    if ("token" in $$props2)
      $$invalidate(27, token = $$props2.token);
    if ("recipient" in $$props2)
      $$invalidate(28, recipient = $$props2.recipient);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 4098) {
      $$invalidate(10, g_coin = p_asset && "holding" === Entities.parseEntityPath(p_asset)?.type && si_native ? $yw_chain.coins?.[si_native] : null);
    }
    if ($$self.$$.dirty[0] & 2) {
      $$invalidate(34, p_token = p_asset && "token" === Entities.parseEntityPath(p_asset)?.type && g_token2 ? Entities.pathFrom(g_token2) : "");
    }
    if ($$self.$$.dirty[0] & 1026 | $$self.$$.dirty[1] & 8) {
      {
        console.log({
          si_native,
          g_coin,
          p_asset,
          p_token,
          g_token: g_token2
        });
      }
    }
    if ($$self.$$.dirty[0] & 2 | $$self.$$.dirty[1] & 112) {
      {
        if ($yw_account && p_asset) {
          $$invalidate(30, yg_balance = null);
          queueMicrotask(async () => {
            $$invalidate(11, s_balance = "[...]");
            const g_cached = $yw_network_active.cachedBalance($yw_owner, si_native);
            if (g_cached && g_cached.timestamp > Date.now() - 5 * XT_MINUTES) {
              $$invalidate(30, yg_balance = new BigNumber(g_cached.data.amount));
            }
            const g_bundle = await $yw_network_active.bankBalance($yw_owner, si_native);
            if (g_bundle) {
              $$invalidate(30, yg_balance = new BigNumber(g_bundle.balance.amount));
            }
          });
        }
      }
    }
    if ($$self.$$.dirty[0] & 1073742848) {
      $$invalidate(11, s_balance = yg_balance ? format_amount(yg_balance.shiftedBy(-(g_coin || g_token2).decimals).toNumber()) : "");
    }
    if ($$self.$$.dirty[0] & 2052) {
      $$invalidate(19, b_using_max = s_amount === s_balance);
    }
    if ($$self.$$.dirty[0] & 1024) {
      $$invalidate(33, si_coingecko = (g_token2 || g_coin)?.extra?.coingecko_id || "");
    }
    if ($$self.$$.dirty[1] & 5) {
      {
        if (si_coingecko) {
          (async () => {
            const h_versus = await CoinGecko.coinsVersus([si_coingecko], si_versus);
            $$invalidate(31, x_worth = h_versus[si_coingecko]);
            if ("number" === typeof x_worth) {
              format_fiat(x_worth, si_versus);
            }
          })();
        }
      }
    }
    if ($$self.$$.dirty[1] & 1) {
      $$invalidate(18, s_fee_fiat = "number" === typeof x_worth ? format_fiat(x_fee * x_worth, "usd") : "");
    }
    if ($$self.$$.dirty[0] & 1 | $$self.$$.dirty[1] & 16) {
      {
        if (!sa_recipient) {
          $$invalidate(3, si_address_type = "none");
        } else {
          $$invalidate(3, si_address_type = "unknown");
          (async () => {
            if (await $yw_network_active.isContract(sa_recipient)) {
              $$invalidate(3, si_address_type = "contract");
            } else {
              $$invalidate(3, si_address_type = "personal");
            }
          })();
        }
      }
    }
    if ($$self.$$.dirty[0] & 8) {
      $$invalidate(17, g_address_type = H_ADDRESS_TYPES[si_address_type]);
    }
    if ($$self.$$.dirty[0] & 536870913) {
      $$invalidate(9, b_new_address = sa_recipient && h_addr_to_contact && !(sa_recipient in h_addr_to_contact));
    }
    if ($$self.$$.dirty[0] & 48 | $$self.$$.dirty[1] & 2) {
      $$invalidate(8, s_err_new_contact = b_checked_save_contact && (c_show_validations || true) ? s_new_contact ? R_CONTACT_NAME.test(s_new_contact) ? "" : s_new_contact.length > 1024 ? "That name is way too long" : "Cannot begin with space" : "Enter a contact name to save new address" : "");
    }
    if ($$self.$$.dirty[0] & 48) {
      {
        if (b_checked_save_contact && !c_show_validations) {
          $$invalidate(8, s_err_new_contact = "");
        }
      }
    }
    if ($$self.$$.dirty[0] & 997 | $$self.$$.dirty[1] & 2) {
      $$invalidate(16, b_form_valid = sa_recipient && s_amount && !s_err_recipient && !s_err_amount && (!b_new_address || !b_checked_save_contact || s_new_contact && !s_err_new_contact) || false);
    }
    if ($$self.$$.dirty[0] & 197) {
      {
        console.log({
          to: sa_recipient,
          s_amount,
          s_err_recipient,
          s_err_amount
        });
      }
    }
  };
  $$invalidate(20, s_symbol = si_native || g_token2?.symbol || "");
  return [
    sa_recipient,
    p_asset,
    s_amount,
    si_address_type,
    c_show_validations,
    b_checked_save_contact,
    s_err_recipient,
    s_err_amount,
    s_err_new_contact,
    b_new_address,
    g_coin,
    s_balance,
    $yw_chain,
    p_account,
    b_memo_expanded,
    s_memo,
    b_form_valid,
    g_address_type,
    s_fee_fiat,
    b_using_max,
    s_symbol,
    g_token2,
    use_max,
    submit,
    input_new_contact,
    sender,
    native,
    token,
    recipient,
    h_addr_to_contact,
    yg_balance,
    x_worth,
    s_new_contact,
    si_coingecko,
    p_token,
    $yw_network_active,
    $yw_owner,
    $yw_account,
    senderselect_accountRef_binding,
    recipientselect_error_binding,
    recipientselect_address_binding,
    checkboxfield_checked_binding,
    assetselect_assetRef_binding,
    amountinput_error_binding,
    amountinput_value_binding,
    click_handler2,
    click_handler_1,
    textarea_input_handler,
    func
  ];
}
class Send extends SvelteComponent {
  constructor(options) {
    super();
    init(
      this,
      options,
      instance$s,
      create_fragment$v,
      safe_not_equal,
      {
        sender: 25,
        native: 26,
        token: 27,
        recipient: 28
      },
      null,
      [-1, -1]
    );
  }
}
function create_fragment$u(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.textContent = "\xA0";
      attr(div, "class", "gap no-margin svelte-1rn5flx");
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
class Gap extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$u, safe_not_equal, {});
  }
}
function as_amount(g_balance, g_coin) {
  const s_norm = g_balance.amount.padStart(g_coin.decimals + 2, "0");
  return s_norm.slice(0, -g_coin.decimals).replace(/^0+/, "0") + "." + s_norm.slice(-g_coin.decimals);
}
async function to_fiat(g_balance, g_coin, si_versus2 = "usd") {
  if ("0" === g_balance.amount)
    return new BigNumber(0);
  const si_gecko = g_coin.extra.coingecko_id;
  const g_versus = await CoinGecko.coinsVersus([si_gecko], si_versus2);
  return new BigNumber(g_balance.amount).shiftedBy(-g_coin.decimals).times(g_versus[si_gecko]);
}
async function coin_formats(g_balance, g_coin, si_versus2 = "usd") {
  const si_gecko = g_coin.extra.coingecko_id;
  const g_versus = await CoinGecko.coinsVersus([si_gecko], si_versus2);
  const x_worth = g_versus[si_gecko];
  const yg_balance = new BigNumber(g_balance.amount).shiftedBy(-g_coin.decimals).times(x_worth);
  return {
    versus: si_versus2,
    balance: yg_balance,
    fiat: yg_balance.times(x_worth).toNumber(),
    worth: x_worth
  };
}
function create_default_slot$f(ctx) {
  let header;
  let t0;
  let portrait;
  let t1;
  let div;
  let current;
  header = new Header({
    props: {
      pops: true,
      account: true,
      network: true,
      title: ctx[3],
      subtitle: ctx[4]
    }
  });
  portrait = new Portrait({
    props: {
      pfp: ctx[2],
      resource: ctx[1] || g_token || null,
      resourcePath: ctx[8],
      title: ctx[5] ? `${format_amount(ctx[5].toNumber())} ${ctx[3]}` : "...",
      subtitle: `${ctx[6]} (${ctx[7]} per ${ctx[0]})`,
      actions: ctx[9],
      circular: true
    }
  });
  return {
    c() {
      create_component(header.$$.fragment);
      t0 = space();
      create_component(portrait.$$.fragment);
      t1 = space();
      div = element("div");
      attr(div, "class", "txns no-margin");
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert(target, t0, anchor);
      mount_component(portrait, target, anchor);
      insert(target, t1, anchor);
      insert(target, div, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const header_changes = {};
      if (dirty & 8)
        header_changes.title = ctx2[3];
      if (dirty & 16)
        header_changes.subtitle = ctx2[4];
      header.$set(header_changes);
      const portrait_changes = {};
      if (dirty & 4)
        portrait_changes.pfp = ctx2[2];
      if (dirty & 2)
        portrait_changes.resource = ctx2[1] || g_token || null;
      if (dirty & 40)
        portrait_changes.title = ctx2[5] ? `${format_amount(ctx2[5].toNumber())} ${ctx2[3]}` : "...";
      if (dirty & 193)
        portrait_changes.subtitle = `${ctx2[6]} (${ctx2[7]} per ${ctx2[0]})`;
      portrait.$set(portrait_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(portrait.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      transition_out(portrait.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
      if (detaching)
        detach(t0);
      destroy_component(portrait, detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment$t(ctx) {
  let screen;
  let current;
  screen = new Screen({
    props: {
      debug: "HoldingView",
      nav: true,
      slides: true,
      $$slots: { default: [create_default_slot$f] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(screen.$$.fragment);
    },
    m(target, anchor) {
      mount_component(screen, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const screen_changes = {};
      if (dirty & 262399) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(screen, detaching);
    }
  };
}
let g_token = null;
function instance$r($$self, $$props, $$invalidate) {
  let $yw_chain;
  let $yw_network_active;
  let $yw_chain_ref;
  component_subscribe($$self, yw_chain, ($$value) => $$invalidate(13, $yw_chain = $$value));
  component_subscribe($$self, yw_network_active, ($$value) => $$invalidate(14, $yw_network_active = $$value));
  component_subscribe($$self, yw_chain_ref, ($$value) => $$invalidate(15, $yw_chain_ref = $$value));
  const k_page = getContext("page");
  let { entityRef } = $$props;
  const p_entity = entityRef;
  let si_type = "";
  let si_coin = "";
  let g_coin = null;
  let p_pfp = "";
  let s_symbol = "";
  let s_name = "";
  let yg_amount = null;
  let s_fiat = "";
  let s_worth = "";
  async function load_entity() {
    await Entities.read();
    const g_info = Entities.parseEntityPath(p_entity);
    if (!g_info) {
      throw new Error(`Attempted to load holding view on non-entity path "${p_entity}"`);
    }
    switch (g_info.type) {
      case "holding": {
        $$invalidate(0, si_type = "coin");
        ({ coin: si_coin } = g_info);
        const p_chain = g_info.chainRef;
        const g_chain = p_chain === $yw_chain_ref ? $yw_chain : await Chains.at(p_chain);
        $$invalidate(1, g_coin = g_chain.coins[si_coin]);
        $$invalidate(3, s_symbol = si_coin);
        $$invalidate(4, s_name = g_coin.name);
        $$invalidate(2, p_pfp = g_coin.pfp);
        const g_cached = $yw_network_active.cachedBalance(g_info.bech32, si_coin);
        let g_balance;
        if (g_cached && g_cached.timestamp >= Date.now() - 2 * XT_MINUTES) {
          g_balance = g_cached.data;
        } else {
          ({ balance: g_balance } = await $yw_network_active.bankBalance(g_info.bech32, si_coin));
        }
        $$invalidate(5, yg_amount = new BigNumber(g_balance.amount).shiftedBy(-g_coin.decimals));
        void coin_formats(g_balance, g_coin).then((g_formats) => {
          $$invalidate(6, s_fiat = format_fiat(g_formats.fiat, g_formats.versus));
          $$invalidate(7, s_worth = format_fiat(g_formats.worth, g_formats.versus));
        });
        break;
      }
      case "token": {
        $$invalidate(0, si_type = "token");
        const ks_entites = await Entities.read();
        ks_entites.tokens(g_info.entityRef, Entities.fungibleInterfacesFor($yw_chain));
        debugger;
        break;
      }
      default: {
        throw new Error(`Unhandled entity type: "${g_info.type}"`);
      }
    }
  }
  load_entity();
  const gc_actions = {
    send: {
      label: "Send",
      trigger() {
        k_page.push({
          creator: Send,
          props: si_coin ? { native: si_coin } : {}
        });
      }
    }
  };
  $$self.$$set = ($$props2) => {
    if ("entityRef" in $$props2)
      $$invalidate(10, entityRef = $$props2.entityRef);
  };
  return [
    si_type,
    g_coin,
    p_pfp,
    s_symbol,
    s_name,
    yg_amount,
    s_fiat,
    s_worth,
    p_entity,
    gc_actions,
    entityRef
  ];
}
class HoldingView extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$r, create_fragment$t, safe_not_equal, { entityRef: 10 });
  }
}
function get_each_context$7(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[23] = list[i][0];
  child_ctx[24] = list[i][1];
  return child_ctx;
}
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[27] = list[i][0];
  child_ctx[33] = list[i][1];
  child_ctx[34] = list[i][2];
  child_ctx[35] = list[i][3];
  const constants_0 = Entities.holdingPathFor(child_ctx[3], child_ctx[27]);
  child_ctx[29] = constants_0;
  const constants_1 = {
    name: child_ctx[27],
    pfp: child_ctx[0].pfp
  };
  child_ctx[36] = constants_1;
  const constants_2 = child_ctx[35](to_fiat(child_ctx[34], child_ctx[33]));
  child_ctx[37] = constants_2;
  return child_ctx;
}
function get_each_context_1$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[27] = list[i][0];
  child_ctx[28] = list[i][1];
  const constants_0 = Entities.holdingPathFor(child_ctx[3], child_ctx[27]);
  child_ctx[29] = constants_0;
  return child_ctx;
}
function create_if_block_2(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.textContent = "TESETNET";
      attr(div, "class", "testnet-reminder no-margin svelte-8v4b7t");
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block$a(ctx) {
  let div2;
  let div0;
  let span;
  let t1;
  let t2_value = ctx[0].testnet ? "testnet " : "";
  let t2;
  let t3_value = ctx[1].join(" or ") + "";
  let t3;
  let t4;
  let t5;
  let div1;
  function select_block_type(ctx2, dirty) {
    if (ctx2[0].testnet)
      return create_if_block_1$3;
    return create_else_block$4;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      span = element("span");
      span.textContent = "Warning:";
      t1 = text(" you don't have any ");
      t2 = text(t2_value);
      t3 = text(t3_value);
      t4 = text(" to pay gas fees.");
      t5 = space();
      div1 = element("div");
      if_block.c();
      attr(span, "class", "warning");
      attr(div0, "class", "message svelte-8v4b7t");
      attr(div1, "class", "buttons");
      attr(div2, "class", "no-gas text-align_center subinfo svelte-8v4b7t");
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, div0);
      append(div0, span);
      append(div0, t1);
      append(div0, t2);
      append(div0, t3);
      append(div0, t4);
      append(div2, t5);
      append(div2, div1);
      if_block.m(div1, null);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 1 && t2_value !== (t2_value = ctx2[0].testnet ? "testnet " : ""))
        set_data(t2, t2_value);
      if (dirty[0] & 2 && t3_value !== (t3_value = ctx2[1].join(" or ") + ""))
        set_data(t3, t3_value);
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div1, null);
        }
      }
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      if_block.d();
    }
  };
}
function create_else_block$4(ctx) {
  let button;
  let t0;
  let t1_value = ctx[1].join(" or ") + "";
  let t1;
  return {
    c() {
      button = element("button");
      t0 = text("Buy ");
      t1 = text(t1_value);
      attr(button, "class", "pill");
    },
    m(target, anchor) {
      insert(target, button, anchor);
      append(button, t0);
      append(button, t1);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 2 && t1_value !== (t1_value = ctx2[1].join(" or ") + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(button);
    }
  };
}
function create_if_block_1$3(ctx) {
  let button;
  let t0;
  let t1_value = ctx[1].join(" or ") + "";
  let t1;
  let t2;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      t0 = text("Get ");
      t1 = text(t1_value);
      t2 = text(" from faucet");
      attr(button, "class", "pill");
    },
    m(target, anchor) {
      insert(target, button, anchor);
      append(button, t0);
      append(button, t1);
      append(button, t2);
      if (!mounted) {
        dispose = listen(button, "click", ctx[14]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 2 && t1_value !== (t1_value = ctx2[1].join(" or ") + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_key_block_1(ctx) {
  let t;
  let div;
  let address;
  let current;
  let if_block = ctx[1].length && create_if_block$a(ctx);
  address = new Address({
    props: {
      address: ctx[3],
      copyable: "text"
    }
  });
  return {
    c() {
      if (if_block)
        if_block.c();
      t = space();
      div = element("div");
      create_component(address.$$.fragment);
      attr(div, "class", "owner-address subinfo svelte-8v4b7t");
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, t, anchor);
      insert(target, div, anchor);
      mount_component(address, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[1].length) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$a(ctx2);
          if_block.c();
          if_block.m(t.parentNode, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      const address_changes = {};
      if (dirty[0] & 8)
        address_changes.address = ctx2[3];
      address.$set(address_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(address.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(address.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t);
      if (detaching)
        detach(div);
      destroy_component(address);
    }
  };
}
function create_catch_block_1(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block_1(ctx) {
  let each_1_anchor;
  let current;
  let each_value_2 = ctx[32];
  let each_blocks = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty[0] & 777) {
        each_value_2 = ctx2[32];
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx2, each_value_2, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_2(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value_2.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_2.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block_2(ctx) {
  let row;
  let current;
  function click_handler_2() {
    return ctx[17](ctx[29]);
  }
  row = new Row({
    props: {
      lockIcon: true,
      detail: "Native Coin",
      resourcePath: ctx[29],
      resource: ctx[36],
      amount: as_amount(ctx[34], ctx[33]),
      fiat: ctx[37].then(ctx[16])
    }
  });
  row.$on("click", click_handler_2);
  return {
    c() {
      create_component(row.$$.fragment);
    },
    m(target, anchor) {
      mount_component(row, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const row_changes = {};
      if (dirty[0] & 8)
        row_changes.resourcePath = ctx[29];
      if (dirty[0] & 1)
        row_changes.resource = ctx[36];
      row.$set(row_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(row.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(row.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(row, detaching);
    }
  };
}
function create_pending_block_1(ctx) {
  let each_1_anchor;
  let current;
  let each_value_1 = ode(ctx[0].coins);
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1$2(get_each_context_1$2(ctx, each_value_1, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty[0] & 265) {
        each_value_1 = ode(ctx2[0].coins);
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1$2(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_1$2(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value_1.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block_1$2(ctx) {
  let row;
  let current;
  function click_handler_1() {
    return ctx[15](ctx[29]);
  }
  row = new Row({
    props: {
      lockIcon: true,
      detail: "Native Coin",
      name: ctx[27],
      pfp: ctx[0].pfp,
      amount: forever()
    }
  });
  row.$on("click", click_handler_1);
  return {
    c() {
      create_component(row.$$.fragment);
    },
    m(target, anchor) {
      mount_component(row, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const row_changes = {};
      if (dirty[0] & 1)
        row_changes.name = ctx[27];
      if (dirty[0] & 1)
        row_changes.pfp = ctx[0].pfp;
      row.$set(row_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(row.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(row.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(row, detaching);
    }
  };
}
function create_catch_block$8(ctx) {
  return { c: noop, m: noop, p: noop, d: noop };
}
function create_then_block$8(ctx) {
  let each_1_anchor;
  let each_value = ode(ctx[7](ctx[22]));
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$7(get_each_context$7(ctx, each_value, i));
  }
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 129) {
        each_value = ode(ctx2[7](ctx2[22]));
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$7(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$7(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block$7(ctx) {
  let t_value = ctx[24].spec + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 1 && t_value !== (t_value = ctx2[24].spec + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_pending_block$8(ctx) {
  let t;
  return {
    c() {
      t = text("Loading tokens...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_key_block$2(ctx) {
  let div;
  let t;
  let promise_1;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block_1,
    then: create_then_block_1,
    catch: create_catch_block_1,
    value: 32,
    blocks: [, , ,]
  };
  handle_promise(ctx[9](), info);
  let info_1 = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$8,
    then: create_then_block$8,
    catch: create_catch_block$8,
    value: 22
  };
  handle_promise(promise_1 = Entities.readFungibleTokens(ctx[0]), info_1);
  return {
    c() {
      div = element("div");
      info.block.c();
      t = space();
      info_1.block.c();
      attr(div, "class", "rows no-margin");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      info.block.m(div, info.anchor = null);
      info.mount = () => div;
      info.anchor = t;
      append(div, t);
      info_1.block.m(div, info_1.anchor = null);
      info_1.mount = () => div;
      info_1.anchor = null;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
      info_1.ctx = ctx;
      if (dirty[0] & 1 && promise_1 !== (promise_1 = Entities.readFungibleTokens(ctx[0])) && handle_promise(promise_1, info_1))
        ;
      else {
        update_await_block_branch(info_1, ctx, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      info.block.d();
      info.token = null;
      info = null;
      info_1.block.d();
      info_1.token = null;
      info_1 = null;
    }
  };
}
function create_default_slot$e(ctx) {
  let header;
  let t0;
  let t1;
  let portrait;
  let t2;
  let previous_key = ctx[0];
  let t3;
  let gap;
  let t4;
  let previous_key_1 = ctx[4];
  let key_block1_anchor;
  let current;
  header = new Header({
    props: {
      search: true,
      network: true,
      account: true
    }
  });
  let if_block = ctx[0].testnet && create_if_block_2();
  portrait = new Portrait({
    props: {
      noPfp: true,
      title: ctx[2],
      subtitle: ctx[5].name,
      resource: ctx[5],
      resourcePath: ctx[6],
      actions: {
        send: { label: "Send", trigger: ctx[12] },
        recv: {
          label: "Receive",
          trigger: ctx[13]
        }
      }
    }
  });
  let key_block0 = create_key_block_1(ctx);
  gap = new Gap({});
  let key_block1 = create_key_block$2(ctx);
  return {
    c() {
      create_component(header.$$.fragment);
      t0 = space();
      if (if_block)
        if_block.c();
      t1 = space();
      create_component(portrait.$$.fragment);
      t2 = space();
      key_block0.c();
      t3 = space();
      create_component(gap.$$.fragment);
      t4 = space();
      key_block1.c();
      key_block1_anchor = empty();
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert(target, t0, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, t1, anchor);
      mount_component(portrait, target, anchor);
      insert(target, t2, anchor);
      key_block0.m(target, anchor);
      insert(target, t3, anchor);
      mount_component(gap, target, anchor);
      insert(target, t4, anchor);
      key_block1.m(target, anchor);
      insert(target, key_block1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[0].testnet) {
        if (if_block)
          ;
        else {
          if_block = create_if_block_2();
          if_block.c();
          if_block.m(t1.parentNode, t1);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      const portrait_changes = {};
      if (dirty[0] & 4)
        portrait_changes.title = ctx2[2];
      if (dirty[0] & 32)
        portrait_changes.subtitle = ctx2[5].name;
      if (dirty[0] & 32)
        portrait_changes.resource = ctx2[5];
      if (dirty[0] & 64)
        portrait_changes.resourcePath = ctx2[6];
      if (dirty[0] & 96)
        portrait_changes.actions = {
          send: { label: "Send", trigger: ctx2[12] },
          recv: {
            label: "Receive",
            trigger: ctx2[13]
          }
        };
      portrait.$set(portrait_changes);
      if (dirty[0] & 1 && safe_not_equal(previous_key, previous_key = ctx2[0])) {
        group_outros();
        transition_out(key_block0, 1, 1, noop);
        check_outros();
        key_block0 = create_key_block_1(ctx2);
        key_block0.c();
        transition_in(key_block0, 1);
        key_block0.m(t3.parentNode, t3);
      } else {
        key_block0.p(ctx2, dirty);
      }
      if (dirty[0] & 16 && safe_not_equal(previous_key_1, previous_key_1 = ctx2[4])) {
        group_outros();
        transition_out(key_block1, 1, 1, noop);
        check_outros();
        key_block1 = create_key_block$2(ctx2);
        key_block1.c();
        transition_in(key_block1, 1);
        key_block1.m(key_block1_anchor.parentNode, key_block1_anchor);
      } else {
        key_block1.p(ctx2, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(portrait.$$.fragment, local);
      transition_in(key_block0);
      transition_in(gap.$$.fragment, local);
      transition_in(key_block1);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      transition_out(portrait.$$.fragment, local);
      transition_out(key_block0);
      transition_out(gap.$$.fragment, local);
      transition_out(key_block1);
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
      if (detaching)
        detach(t0);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t1);
      destroy_component(portrait, detaching);
      if (detaching)
        detach(t2);
      key_block0.d(detaching);
      if (detaching)
        detach(t3);
      destroy_component(gap, detaching);
      if (detaching)
        detach(t4);
      if (detaching)
        detach(key_block1_anchor);
      key_block1.d(detaching);
    }
  };
}
function create_fragment$s(ctx) {
  let screen;
  let current;
  screen = new Screen({
    props: {
      debug: "HoldingsHome",
      nav: true,
      root: true,
      keyed: true,
      $$slots: { default: [create_default_slot$e] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(screen.$$.fragment);
    },
    m(target, anchor) {
      mount_component(screen, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const screen_changes = {};
      if (dirty[0] & 127 | dirty[1] & 512) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(screen, detaching);
    }
  };
}
function instance$q($$self, $$props, $$invalidate) {
  let $yw_chain;
  let $yw_owner;
  let $yw_network_active;
  let $yw_account;
  let $yw_account_ref;
  component_subscribe($$self, yw_chain, ($$value) => $$invalidate(0, $yw_chain = $$value));
  component_subscribe($$self, yw_owner, ($$value) => $$invalidate(3, $yw_owner = $$value));
  component_subscribe($$self, yw_network_active, ($$value) => $$invalidate(4, $yw_network_active = $$value));
  component_subscribe($$self, yw_account, ($$value) => $$invalidate(5, $yw_account = $$value));
  component_subscribe($$self, yw_account_ref, ($$value) => $$invalidate(6, $yw_account_ref = $$value));
  const merge_fungible_tokens = (h_fungibles) => oderom(h_fungibles, (_, h) => h);
  const k_page = getContext("page");
  let yg_total = new BigNumber(0);
  let c_balances = 0;
  let a_no_gas = [];
  let fk_resolve_total;
  let dp_total = new Promise((fk_resolve) => {
    fk_resolve_total = fk_resolve;
  });
  let g_chain_cached = $yw_chain;
  function check_total() {
    c_balances -= 1;
    if (!c_balances) {
      const s_total = format_fiat(yg_total.toNumber(), "usd");
      fk_resolve_total(s_total);
      const g_account = $yw_account;
      void Accounts.open((ks) => ks.put({
        ...g_account,
        extra: { total_fiat_cache: s_total }
      }));
    }
  }
  async function load_native_balances() {
    let h_balances;
    try {
      h_balances = await $yw_network_active.bankBalances($yw_owner);
    } catch (e_network) {
      syserr({ error: e_network, text: "Network error" });
      return [];
    }
    const a_outs = [];
    for (const [si_coin, g_coin] of ode($yw_chain.coins)) {
      const g_bundle = h_balances[si_coin];
      if (!g_bundle || "0" === g_bundle.balance.amount) {
        a_no_gas.push(si_coin);
      }
      c_balances += 1;
      a_outs.push([
        si_coin,
        $yw_chain.coins[si_coin],
        g_bundle?.balance || { amount: "0", denom: g_coin.denom },
        async (z_out) => {
          const yg_balance = await z_out;
          yg_total = yg_total.plus(yg_balance);
          check_total();
          return yg_balance;
        }
      ]);
    }
    if (!a_outs.length) {
      c_balances += 1;
      check_total();
    }
    $$invalidate(1, a_no_gas), $$invalidate(0, $yw_chain), $$invalidate(11, g_chain_cached);
    return a_outs;
  }
  const H_FAUCETS = {
    "theta-testnet-001": "https://discord.com/channels/669268347736686612/953697793476821092",
    "pulsar-2": "https://faucet.secrettestnet.io/"
  };
  const func = function() {
    k_page.push({
      creator: Send,
      props: { from: $yw_account }
    });
  };
  const func_12 = function() {
    popup_receive($yw_account_ref);
  };
  const click_handler2 = () => open_external_link(H_FAUCETS[$yw_chain.id]);
  const click_handler_1 = (p_entity) => {
    k_page.push({
      creator: HoldingView,
      props: { entityRef: p_entity }
    });
  };
  const func_2 = (yg) => format_fiat(yg.toNumber(), "usd");
  const click_handler_2 = (p_entity) => {
    k_page.push({
      creator: HoldingView,
      props: { entityRef: p_entity }
    });
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 2049) {
      {
        if ($yw_chain !== g_chain_cached) {
          $$invalidate(11, g_chain_cached = $yw_chain);
          yg_total = new BigNumber(0);
          c_balances = 0;
          $$invalidate(2, dp_total = new Promise((fk_resolve) => {
            fk_resolve_total = fk_resolve;
          }));
          $$invalidate(1, a_no_gas = []);
        }
      }
    }
  };
  return [
    $yw_chain,
    a_no_gas,
    dp_total,
    $yw_owner,
    $yw_network_active,
    $yw_account,
    $yw_account_ref,
    merge_fungible_tokens,
    k_page,
    load_native_balances,
    H_FAUCETS,
    g_chain_cached,
    func,
    func_12,
    click_handler2,
    click_handler_1,
    func_2,
    click_handler_2
  ];
}
class HoldingsHome extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$q, create_fragment$s, safe_not_equal, {}, null, [-1, -1]);
  }
}
function create_catch_block$7(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block$7(ctx) {
  let field0;
  let t0;
  let field1;
  let t1;
  let field2;
  let t2;
  let actionsline;
  let current;
  field0 = new Field({
    props: {
      key: "profile-icon",
      name: "Profile icon"
    }
  });
  field1 = new Field({
    props: {
      key: "account-name",
      name: "Name",
      $$slots: { default: [create_default_slot_3$3] },
      $$scope: { ctx }
    }
  });
  field2 = new Field({
    props: {
      key: "account-address",
      name: "Public address",
      $$slots: { default: [create_default_slot_1$5] },
      $$scope: { ctx }
    }
  });
  actionsline = new ActionsLine({
    props: {
      cancel: !ctx[4],
      back: true,
      confirm: ["Finish", ctx[6], !ctx[3]]
    }
  });
  return {
    c() {
      create_component(field0.$$.fragment);
      t0 = space();
      create_component(field1.$$.fragment);
      t1 = space();
      create_component(field2.$$.fragment);
      t2 = space();
      create_component(actionsline.$$.fragment);
    },
    m(target, anchor) {
      mount_component(field0, target, anchor);
      insert(target, t0, anchor);
      mount_component(field1, target, anchor);
      insert(target, t1, anchor);
      mount_component(field2, target, anchor);
      insert(target, t2, anchor);
      mount_component(actionsline, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const field1_changes = {};
      if (dirty & 8194) {
        field1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field1.$set(field1_changes);
      const field2_changes = {};
      if (dirty & 8196) {
        field2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field2.$set(field2_changes);
      const actionsline_changes = {};
      if (dirty & 8)
        actionsline_changes.confirm = ["Finish", ctx2[6], !ctx2[3]];
      actionsline.$set(actionsline_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(field0.$$.fragment, local);
      transition_in(field1.$$.fragment, local);
      transition_in(field2.$$.fragment, local);
      transition_in(actionsline.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(field0.$$.fragment, local);
      transition_out(field1.$$.fragment, local);
      transition_out(field2.$$.fragment, local);
      transition_out(actionsline.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(field0, detaching);
      if (detaching)
        detach(t0);
      destroy_component(field1, detaching);
      if (detaching)
        detach(t1);
      destroy_component(field2, detaching);
      if (detaching)
        detach(t2);
      destroy_component(actionsline, detaching);
    }
  };
}
function create_default_slot_3$3(ctx) {
  let input;
  let mounted;
  let dispose;
  return {
    c() {
      input = element("input");
      attr(input, "id", "account-name");
      attr(input, "type", "text");
      attr(input, "placeholder", "Satoshi");
    },
    m(target, anchor) {
      insert(target, input, anchor);
      set_input_value(input, ctx[1]);
      if (!mounted) {
        dispose = listen(input, "input", ctx[9]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 2 && input.value !== ctx2[1]) {
        set_input_value(input, ctx2[1]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(input);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot_2$3(ctx) {
  let address;
  let current;
  address = new Address({
    props: {
      copyable: true,
      address: ctx[2]
    }
  });
  return {
    c() {
      create_component(address.$$.fragment);
    },
    m(target, anchor) {
      mount_component(address, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const address_changes = {};
      if (dirty & 4)
        address_changes.address = ctx2[2];
      address.$set(address_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(address.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(address.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(address, detaching);
    }
  };
}
function create_default_slot_1$5(ctx) {
  let info;
  let current;
  info = new Info({
    props: {
      address: true,
      key: "account-address",
      $$slots: { default: [create_default_slot_2$3] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(info.$$.fragment);
    },
    m(target, anchor) {
      mount_component(info, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const info_changes = {};
      if (dirty & 8196) {
        info_changes.$$scope = { dirty, ctx: ctx2 };
      }
      info.$set(info_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(info.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(info.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(info, detaching);
    }
  };
}
function create_pending_block$7(ctx) {
  let t;
  return {
    c() {
      t = text("Loading accounts...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot$d(ctx) {
  let h3;
  let t0_value = ctx[0] ? "Edit" : "New";
  let t0;
  let t1;
  let t2;
  let await_block_anchor;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$7,
    then: create_then_block$7,
    catch: create_catch_block$7,
    blocks: [, , ,]
  };
  handle_promise(ctx[5](), info);
  return {
    c() {
      h3 = element("h3");
      t0 = text(t0_value);
      t1 = text(" account");
      t2 = space();
      await_block_anchor = empty();
      info.block.c();
    },
    m(target, anchor) {
      insert(target, h3, anchor);
      append(h3, t0);
      append(h3, t1);
      insert(target, t2, anchor);
      insert(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if ((!current || dirty & 1) && t0_value !== (t0_value = ctx[0] ? "Edit" : "New"))
        set_data(t0, t0_value);
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(h3);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function create_fragment$r(ctx) {
  let screen;
  let current;
  screen = new Screen({
    props: {
      $$slots: { default: [create_default_slot$d] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(screen.$$.fragment);
    },
    m(target, anchor) {
      mount_component(screen, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const screen_changes = {};
      if (dirty & 8207) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(screen, detaching);
    }
  };
}
function instance$p($$self, $$props, $$invalidate) {
  let b_form_valid;
  let $yw_account_ref;
  let $yw_chain;
  component_subscribe($$self, yw_account_ref, ($$value) => $$invalidate(10, $yw_account_ref = $$value));
  component_subscribe($$self, yw_chain, ($$value) => $$invalidate(8, $yw_chain = $$value));
  let { account } = $$props;
  const p_account = account;
  let g_account;
  let s_name = "";
  let sa_account;
  const completed = getContext("completed");
  const k_page = getContext("page");
  async function load_account() {
    const ks_accounts = await Accounts.read();
    $$invalidate(7, g_account = ks_accounts.at(p_account));
    $$invalidate(1, s_name = g_account.name);
  }
  async function save_account() {
    Object.assign(g_account, { name: s_name });
    await Accounts.open((ks_accounts) => ks_accounts.put(g_account));
    if (p_account === $yw_account_ref) {
      set_store_value(yw_account_ref, $yw_account_ref = p_account, $yw_account_ref);
    }
    if (completed) {
      completed(true);
    } else {
      k_page.reset();
    }
  }
  function input_input_handler() {
    s_name = this.value;
    $$invalidate(1, s_name);
  }
  $$self.$$set = ($$props2) => {
    if ("account" in $$props2)
      $$invalidate(0, account = $$props2.account);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 2) {
      $$invalidate(3, b_form_valid = !!s_name);
    }
    if ($$self.$$.dirty & 384) {
      $$invalidate(2, sa_account = g_account ? Chains.addressFor(g_account.pubkey, $yw_chain) : "");
    }
  };
  return [
    account,
    s_name,
    sa_account,
    b_form_valid,
    completed,
    load_account,
    save_account,
    g_account,
    $yw_chain,
    input_input_handler
  ];
}
class AccountEdit extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$p, create_fragment$r, safe_not_equal, { account: 0 });
  }
}
function create_catch_block$6(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block$6(ctx) {
  let portrait;
  let current;
  portrait = new Portrait({
    props: {
      resource: ctx[0],
      resourcePath: ctx[1],
      actions: ctx[3],
      $$slots: { subtitle: [create_subtitle_slot$2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(portrait.$$.fragment);
    },
    m(target, anchor) {
      mount_component(portrait, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const portrait_changes = {};
      if (dirty & 1)
        portrait_changes.resource = ctx2[0];
      if (dirty & 65) {
        portrait_changes.$$scope = { dirty, ctx: ctx2 };
      }
      portrait.$set(portrait_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(portrait.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(portrait.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(portrait, detaching);
    }
  };
}
function create_subtitle_slot$2(ctx) {
  let address;
  let current;
  address = new Address({
    props: {
      copyable: true,
      address: Chains.addressFor(ctx[0].pubkey)
    }
  });
  return {
    c() {
      create_component(address.$$.fragment);
    },
    m(target, anchor) {
      mount_component(address, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const address_changes = {};
      if (dirty & 1)
        address_changes.address = Chains.addressFor(ctx2[0].pubkey);
      address.$set(address_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(address.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(address.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(address, detaching);
    }
  };
}
function create_pending_block$6(ctx) {
  let t;
  return {
    c() {
      t = text("Loading...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot$c(ctx) {
  let header;
  let t;
  let await_block_anchor;
  let current;
  header = new Header({
    props: {
      pops: true,
      search: true,
      network: true,
      title: "Account"
    }
  });
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$6,
    then: create_then_block$6,
    catch: create_catch_block$6,
    blocks: [, , ,]
  };
  handle_promise(ctx[2](), info);
  return {
    c() {
      create_component(header.$$.fragment);
      t = space();
      await_block_anchor = empty();
      info.block.c();
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert(target, t, anchor);
      insert(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(info.block);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
      if (detaching)
        detach(t);
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function create_fragment$q(ctx) {
  let screen;
  let current;
  screen = new Screen({
    props: {
      nav: true,
      $$slots: { default: [create_default_slot$c] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(screen.$$.fragment);
    },
    m(target, anchor) {
      mount_component(screen, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const screen_changes = {};
      if (dirty & 65) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(screen, detaching);
    }
  };
}
function instance$o($$self, $$props, $$invalidate) {
  let { accountRef } = $$props;
  const p_account = accountRef;
  let g_account;
  const k_page = getContext("page");
  async function load_account() {
    const ks_accounts = await Accounts.read();
    return $$invalidate(0, g_account = ks_accounts.at(p_account));
  }
  const gc_actions = {
    send: {
      label: "Send",
      trigger() {
        k_page.push({
          creator: Send,
          props: {
            from: Chains.addressFor(g_account.pubkey)
          }
        });
      }
    },
    recv: {
      label: "Receive",
      trigger() {
        popup_receive(p_account);
      }
    },
    edit: {
      label: "Edit",
      trigger() {
        k_page.push({
          creator: AccountEdit,
          props: { account: p_account }
        });
      }
    }
  };
  $$self.$$set = ($$props2) => {
    if ("accountRef" in $$props2)
      $$invalidate(4, accountRef = $$props2.accountRef);
  };
  return [g_account, p_account, load_account, gc_actions, accountRef];
}
class AccountView extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$o, create_fragment$q, safe_not_equal, { accountRef: 4 });
  }
}
function get_each_context$6(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i][0];
  child_ctx[6] = list[i][1];
  const constants_0 = Chains.addressFor(child_ctx[6].pubkey);
  child_ctx[7] = constants_0;
  return child_ctx;
}
function create_catch_block$5(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block$5(ctx) {
  let previous_key = ctx[1];
  let key_block_anchor;
  let current;
  let key_block = create_key_block$1(ctx);
  return {
    c() {
      key_block.c();
      key_block_anchor = empty();
    },
    m(target, anchor) {
      key_block.m(target, anchor);
      insert(target, key_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 2 && safe_not_equal(previous_key, previous_key = ctx2[1])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block$1(ctx2);
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx2, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(key_block);
      current = true;
    },
    o(local) {
      transition_out(key_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(key_block_anchor);
      key_block.d(detaching);
    }
  };
}
function create_detail_slot$1(ctx) {
  let div;
  let t1;
  let address;
  let t2;
  let current;
  address = new Address({ props: { address: ctx[7] } });
  return {
    c() {
      div = element("div");
      div.textContent = "StarShell - - m/44'/118'/0'/0/??";
      t1 = space();
      create_component(address.$$.fragment);
      t2 = space();
      attr(div, "class", "hd-path");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      insert(target, t1, anchor);
      mount_component(address, target, anchor);
      insert(target, t2, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const address_changes = {};
      if (dirty & 1)
        address_changes.address = ctx2[7];
      address.$set(address_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(address.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(address.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching)
        detach(t1);
      destroy_component(address, detaching);
      if (detaching)
        detach(t2);
    }
  };
}
function create_each_block$6(ctx) {
  let row;
  let current;
  function click_handler2() {
    return ctx[4](ctx[5]);
  }
  row = new Row({
    props: {
      resource: ctx[6],
      resourcePath: ctx[5],
      address: ctx[7],
      iconClass: "square pfp",
      $$slots: { detail: [create_detail_slot$1] },
      $$scope: { ctx }
    }
  });
  row.$on("click", click_handler2);
  return {
    c() {
      create_component(row.$$.fragment);
    },
    m(target, anchor) {
      mount_component(row, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const row_changes = {};
      if (dirty & 1)
        row_changes.resource = ctx[6];
      if (dirty & 1)
        row_changes.resourcePath = ctx[5];
      if (dirty & 1)
        row_changes.address = ctx[7];
      if (dirty & 1025) {
        row_changes.$$scope = { dirty, ctx };
      }
      row.$set(row_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(row.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(row.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(row, detaching);
    }
  };
}
function create_key_block$1(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$6(get_each_context$6(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 5) {
        each_value = ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$6(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$6(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_pending_block$5(ctx) {
  let t;
  return {
    c() {
      t = text("Loading...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot$b(ctx) {
  let header;
  let t0;
  let subheader;
  let t1;
  let div;
  let current;
  header = new Header({
    props: {
      search: true,
      network: true,
      account: true
    }
  });
  subheader = new SubHeader({ props: { title: "Accounts" } });
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$5,
    then: create_then_block$5,
    catch: create_catch_block$5,
    blocks: [, , ,]
  };
  handle_promise(ctx[3](), info);
  return {
    c() {
      create_component(header.$$.fragment);
      t0 = space();
      create_component(subheader.$$.fragment);
      t1 = space();
      div = element("div");
      info.block.c();
      attr(div, "class", "rows no-margin");
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert(target, t0, anchor);
      mount_component(subheader, target, anchor);
      insert(target, t1, anchor);
      insert(target, div, anchor);
      info.block.m(div, info.anchor = null);
      info.mount = () => div;
      info.anchor = null;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(subheader.$$.fragment, local);
      transition_in(info.block);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      transition_out(subheader.$$.fragment, local);
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
      if (detaching)
        detach(t0);
      destroy_component(subheader, detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div);
      info.block.d();
      info.token = null;
      info = null;
    }
  };
}
function create_fragment$p(ctx) {
  let screen;
  let current;
  screen = new Screen({
    props: {
      debug: "Accounts",
      nav: true,
      root: true,
      $$slots: { default: [create_default_slot$b] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(screen.$$.fragment);
    },
    m(target, anchor) {
      mount_component(screen, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const screen_changes = {};
      if (dirty & 1027) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(screen, detaching);
    }
  };
}
function instance$n($$self, $$props, $$invalidate) {
  let $yw_chain;
  component_subscribe($$self, yw_chain, ($$value) => $$invalidate(1, $yw_chain = $$value));
  const k_page = getContext("page");
  let a_accounts;
  async function load_accounts() {
    const ks_accounts = await Accounts.read();
    return $$invalidate(0, a_accounts = ks_accounts.entries());
  }
  const click_handler2 = (p_account) => k_page.push({
    creator: AccountView,
    props: { accountRef: p_account }
  });
  return [a_accounts, $yw_chain, k_page, load_accounts, click_handler2];
}
class AccountsHome extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$n, create_fragment$p, safe_not_equal, {});
  }
}
let id = 1;
function getId() {
  return `svelte-tabs-${id++}`;
}
function create_fragment$o(ctx) {
  let div;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], null);
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      attr(div, "class", "svelte-tabs");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(div, "keydown", ctx[1]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 8)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[3],
            !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, null),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
const TABS = {};
function removeAndUpdateSelected(arr, item, selectedStore) {
  const index = arr.indexOf(item);
  arr.splice(index, 1);
  selectedStore.update((selected) => selected === item ? arr[index] || arr[arr.length - 1] : selected);
}
function instance$m($$self, $$props, $$invalidate) {
  let $selectedTab;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { initialSelectedIndex = 0 } = $$props;
  const tabElements = [];
  const tabs = [];
  const panels = [];
  const controls = writable({});
  const labeledBy = writable({});
  const selectedTab = writable(null);
  component_subscribe($$self, selectedTab, (value) => $$invalidate(5, $selectedTab = value));
  const selectedPanel = writable(null);
  function registerItem(arr, item, selectedStore) {
    arr.push(item);
    selectedStore.update((selected) => selected || item);
    onDestroy(() => removeAndUpdateSelected(arr, item, selectedStore));
  }
  function selectTab(tab) {
    const index = tabs.indexOf(tab);
    selectedTab.set(tab);
    selectedPanel.set(panels[index]);
  }
  setContext(TABS, {
    registerTab(tab) {
      registerItem(tabs, tab, selectedTab);
    },
    registerTabElement(tabElement) {
      tabElements.push(tabElement);
    },
    registerPanel(panel) {
      registerItem(panels, panel, selectedPanel);
    },
    selectTab,
    selectedTab,
    selectedPanel,
    controls,
    labeledBy
  });
  onMount(() => {
    selectTab(tabs[initialSelectedIndex]);
  });
  afterUpdate(() => {
    for (let i = 0; i < tabs.length; i++) {
      controls.update((controlsData) => ({
        ...controlsData,
        [tabs[i].id]: panels[i].id
      }));
      labeledBy.update((labeledByData) => ({
        ...labeledByData,
        [panels[i].id]: tabs[i].id
      }));
    }
  });
  async function handleKeyDown(event) {
    if (event.target.classList.contains("svelte-tabs__tab")) {
      let selectedIndex = tabs.indexOf($selectedTab);
      switch (event.key) {
        case "ArrowRight":
          selectedIndex += 1;
          if (selectedIndex > tabs.length - 1) {
            selectedIndex = 0;
          }
          selectTab(tabs[selectedIndex]);
          tabElements[selectedIndex].focus();
          break;
        case "ArrowLeft":
          selectedIndex -= 1;
          if (selectedIndex < 0) {
            selectedIndex = tabs.length - 1;
          }
          selectTab(tabs[selectedIndex]);
          tabElements[selectedIndex].focus();
      }
    }
  }
  $$self.$$set = ($$props2) => {
    if ("initialSelectedIndex" in $$props2)
      $$invalidate(2, initialSelectedIndex = $$props2.initialSelectedIndex);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  return [selectedTab, handleKeyDown, initialSelectedIndex, $$scope, slots];
}
class Tabs extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$m, create_fragment$o, safe_not_equal, { initialSelectedIndex: 2 });
  }
}
function create_fragment$n(ctx) {
  let li;
  let li_aria_controls_value;
  let li_tabindex_value;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[9].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[8], null);
  return {
    c() {
      li = element("li");
      if (default_slot)
        default_slot.c();
      attr(li, "role", "tab");
      attr(li, "id", ctx[3].id);
      attr(li, "aria-controls", li_aria_controls_value = ctx[2][ctx[3].id]);
      attr(li, "aria-selected", ctx[1]);
      attr(li, "tabindex", li_tabindex_value = ctx[1] ? 0 : -1);
      attr(li, "class", "svelte-tabs__tab svelte-1fbofsd");
      toggle_class(li, "svelte-tabs__selected", ctx[1]);
    },
    m(target, anchor) {
      insert(target, li, anchor);
      if (default_slot) {
        default_slot.m(li, null);
      }
      ctx[10](li);
      current = true;
      if (!mounted) {
        dispose = listen(li, "click", ctx[11]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 256)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[8],
            !current ? get_all_dirty_from_scope(ctx2[8]) : get_slot_changes(default_slot_template, ctx2[8], dirty, null),
            null
          );
        }
      }
      if (!current || dirty & 4 && li_aria_controls_value !== (li_aria_controls_value = ctx2[2][ctx2[3].id])) {
        attr(li, "aria-controls", li_aria_controls_value);
      }
      if (!current || dirty & 2) {
        attr(li, "aria-selected", ctx2[1]);
      }
      if (!current || dirty & 2 && li_tabindex_value !== (li_tabindex_value = ctx2[1] ? 0 : -1)) {
        attr(li, "tabindex", li_tabindex_value);
      }
      if (dirty & 2) {
        toggle_class(li, "svelte-tabs__selected", ctx2[1]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      if (default_slot)
        default_slot.d(detaching);
      ctx[10](null);
      mounted = false;
      dispose();
    }
  };
}
function instance$l($$self, $$props, $$invalidate) {
  let $selectedTab;
  let $controls;
  let { $$slots: slots = {}, $$scope } = $$props;
  let tabEl;
  const tab = { id: getId() };
  const { registerTab, registerTabElement, selectTab, selectedTab, controls } = getContext(TABS);
  component_subscribe($$self, selectedTab, (value) => $$invalidate(7, $selectedTab = value));
  component_subscribe($$self, controls, (value) => $$invalidate(2, $controls = value));
  let isSelected;
  registerTab(tab);
  onMount(async () => {
    await tick();
    registerTabElement(tabEl);
  });
  function li_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      tabEl = $$value;
      $$invalidate(0, tabEl);
    });
  }
  const click_handler2 = () => selectTab(tab);
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(8, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 128) {
      $$invalidate(1, isSelected = $selectedTab === tab);
    }
  };
  return [
    tabEl,
    isSelected,
    $controls,
    tab,
    selectTab,
    selectedTab,
    controls,
    $selectedTab,
    $$scope,
    slots,
    li_binding,
    click_handler2
  ];
}
class Tab extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$l, create_fragment$n, safe_not_equal, {});
  }
}
function create_fragment$m(ctx) {
  let ul;
  let current;
  const default_slot_template = ctx[1].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[0], null);
  return {
    c() {
      ul = element("ul");
      if (default_slot)
        default_slot.c();
      attr(ul, "role", "tablist");
      attr(ul, "class", "svelte-tabs__tab-list svelte-12yby2a");
    },
    m(target, anchor) {
      insert(target, ul, anchor);
      if (default_slot) {
        default_slot.m(ul, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[0],
            !current ? get_all_dirty_from_scope(ctx2[0]) : get_slot_changes(default_slot_template, ctx2[0], dirty, null),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(ul);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$k($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class TabList extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$k, create_fragment$m, safe_not_equal, {});
  }
}
function create_if_block$9(ctx) {
  let current;
  const default_slot_template = ctx[6].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 32)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[5],
            !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$l(ctx) {
  let div;
  let div_aria_labelledby_value;
  let current;
  let if_block = ctx[1] === ctx[2] && create_if_block$9(ctx);
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      attr(div, "id", ctx[2].id);
      attr(div, "aria-labelledby", div_aria_labelledby_value = ctx[0][ctx[2].id]);
      attr(div, "class", "svelte-tabs__tab-panel svelte-epfyet");
      attr(div, "role", "tabpanel");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[1] === ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$9(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty & 1 && div_aria_labelledby_value !== (div_aria_labelledby_value = ctx2[0][ctx2[2].id])) {
        attr(div, "aria-labelledby", div_aria_labelledby_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
    }
  };
}
function instance$j($$self, $$props, $$invalidate) {
  let $labeledBy;
  let $selectedPanel;
  let { $$slots: slots = {}, $$scope } = $$props;
  const panel = { id: getId() };
  const { registerPanel, selectedPanel, labeledBy } = getContext(TABS);
  component_subscribe($$self, selectedPanel, (value) => $$invalidate(1, $selectedPanel = value));
  component_subscribe($$self, labeledBy, (value) => $$invalidate(0, $labeledBy = value));
  registerPanel(panel);
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(5, $$scope = $$props2.$$scope);
  };
  return [$labeledBy, $selectedPanel, panel, selectedPanel, labeledBy, $$scope, slots];
}
class TabPanel extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$j, create_fragment$l, safe_not_equal, {});
  }
}
var SX_ICON_ASTRONAUT = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16z"/></svg>';
function create_default_slot$a(ctx) {
  let header;
  let t0;
  let h3;
  let t2;
  let p0;
  let t4;
  let p1;
  let t6;
  let center;
  let span;
  let t7;
  let div;
  let button;
  let current;
  let mounted;
  let dispose;
  header = new Header({
    props: { pops: true, title: "Not yet available" }
  });
  return {
    c() {
      create_component(header.$$.fragment);
      t0 = space();
      h3 = element("h3");
      h3.textContent = "Nothing to see here!";
      t2 = space();
      p0 = element("p");
      p0.textContent = "This screen has not yet been implemented.";
      t4 = space();
      p1 = element("p");
      p1.textContent = "Please continue exploring the beta.";
      t6 = space();
      center = element("center");
      span = element("span");
      t7 = space();
      div = element("div");
      button = element("button");
      button.textContent = "Continue";
      attr(span, "class", "icon svelte-o7n71o");
      attr(button, "class", "primary");
      attr(div, "class", "action-line");
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert(target, t0, anchor);
      insert(target, h3, anchor);
      insert(target, t2, anchor);
      insert(target, p0, anchor);
      insert(target, t4, anchor);
      insert(target, p1, anchor);
      insert(target, t6, anchor);
      insert(target, center, anchor);
      append(center, span);
      span.innerHTML = SX_ICON_ASTRONAUT;
      insert(target, t7, anchor);
      insert(target, div, anchor);
      append(div, button);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", ctx[2]);
        mounted = true;
      }
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(h3);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(p0);
      if (detaching)
        detach(t4);
      if (detaching)
        detach(p1);
      if (detaching)
        detach(t6);
      if (detaching)
        detach(center);
      if (detaching)
        detach(t7);
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$k(ctx) {
  let screen;
  let current;
  screen = new Screen({
    props: {
      $$slots: { default: [create_default_slot$a] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(screen.$$.fragment);
    },
    m(target, anchor) {
      mount_component(screen, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const screen_changes = {};
      if (dirty & 64) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(screen, detaching);
    }
  };
}
function instance$i($$self, $$props, $$invalidate) {
  let $yw_navigator;
  component_subscribe($$self, yw_navigator, ($$value) => $$invalidate(3, $yw_navigator = $$value));
  let { reset = false } = $$props;
  const b_reset = reset;
  const k_page = getContext("page");
  function cont() {
    if (b_reset) {
      k_page.reset();
      void $yw_navigator.activateThread(ThreadId.TOKENS);
    } else {
      k_page.pop();
    }
  }
  const click_handler2 = () => cont();
  $$self.$$set = ($$props2) => {
    if ("reset" in $$props2)
      $$invalidate(1, reset = $$props2.reset);
  };
  return [cont, reset, click_handler2];
}
class DeadEnd extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$i, create_fragment$k, safe_not_equal, { reset: 1 });
  }
}
function create_else_block$3(ctx) {
  let portrait;
  let current;
  portrait = new Portrait({
    props: {
      resource: ctx[0],
      resourcePath: ctx[1],
      actions: ctx[2],
      $$slots: {
        subtitle: [create_subtitle_slot$1],
        default: [create_default_slot_1$4]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(portrait.$$.fragment);
    },
    m(target, anchor) {
      mount_component(portrait, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const portrait_changes = {};
      if (dirty & 1)
        portrait_changes.resource = ctx2[0];
      if (dirty & 65) {
        portrait_changes.$$scope = { dirty, ctx: ctx2 };
      }
      portrait.$set(portrait_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(portrait.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(portrait.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(portrait, detaching);
    }
  };
}
function create_if_block$8(ctx) {
  let t;
  return {
    c() {
      t = text("Loading contact...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_1$4(ctx) {
  let t;
  return {
    c() {
      t = text("address");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_subtitle_slot$1(ctx) {
  let address;
  let current;
  address = new Address({
    props: {
      copyable: true,
      address: Chains.bech32(ctx[0].address)
    }
  });
  return {
    c() {
      create_component(address.$$.fragment);
    },
    m(target, anchor) {
      mount_component(address, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const address_changes = {};
      if (dirty & 1)
        address_changes.address = Chains.bech32(ctx2[0].address);
      address.$set(address_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(address.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(address.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(address, detaching);
    }
  };
}
function create_default_slot$9(ctx) {
  let header;
  let t;
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  header = new Header({
    props: {
      pops: true,
      search: true,
      network: true,
      account: true
    }
  });
  const if_block_creators = [create_if_block$8, create_else_block$3];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!ctx2[0])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      create_component(header.$$.fragment);
      t = space();
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert(target, t, anchor);
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
      if (detaching)
        detach(t);
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$j(ctx) {
  let screen;
  let current;
  screen = new Screen({
    props: {
      nav: true,
      slides: true,
      $$slots: { default: [create_default_slot$9] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(screen.$$.fragment);
    },
    m(target, anchor) {
      mount_component(screen, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const screen_changes = {};
      if (dirty & 65) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(screen, detaching);
    }
  };
}
function instance$h($$self, $$props, $$invalidate) {
  let { contactRef } = $$props;
  const p_contact = contactRef;
  let g_contact;
  void Agents.getContact(p_contact).then((g) => $$invalidate(0, g_contact = g));
  const k_page = getContext("page");
  const gc_actions = {
    send: {
      label: "Send",
      trigger() {
        k_page.push({
          creator: Send,
          props: { to: Chains.bech32(g_contact.address) }
        });
      }
    },
    edit: {
      label: "Edit",
      trigger() {
        k_page.push({
          creator: ContactEdit,
          props: { contactRef: p_contact }
        });
      }
    },
    delete: {
      label: "Delete",
      trigger() {
        k_page.push({ creator: DeadEnd });
      }
    }
  };
  $$self.$$set = ($$props2) => {
    if ("contactRef" in $$props2)
      $$invalidate(3, contactRef = $$props2.contactRef);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      g_contact ? Chains.bech32(g_contact.address) : "";
    }
  };
  return [g_contact, p_contact, gc_actions, contactRef];
}
class ContactView extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$h, create_fragment$j, safe_not_equal, { contactRef: 3 });
  }
}
var SX_ICON_IMAGE = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n	<path style="fill: var(--svg-color-fg, currentColor);" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/>\n</svg>';
function create_if_block$7(ctx) {
  let pfpdisplay;
  let current;
  pfpdisplay = new PfpDisplay({
    props: {
      dim: 48,
      ref: ctx[0],
      name: ctx[1]
    }
  });
  return {
    c() {
      create_component(pfpdisplay.$$.fragment);
    },
    m(target, anchor) {
      mount_component(pfpdisplay, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(pfpdisplay.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(pfpdisplay.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(pfpdisplay, detaching);
    }
  };
}
function create_fragment$i(ctx) {
  let div4;
  let div3;
  let span0;
  let t0;
  let span5;
  let div0;
  let t4;
  let div2;
  let div1;
  let span3;
  let t5;
  let span4;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[0] && create_if_block$7(ctx);
  return {
    c() {
      div4 = element("div");
      div3 = element("div");
      span0 = element("span");
      if (if_block)
        if_block.c();
      t0 = space();
      span5 = element("span");
      div0 = element("div");
      div0.innerHTML = `<span class="warning svelte-1i7pjsy">Notice:</span> 
				<span class="info">Uploaded icons will be resized to be square. Only JPG &amp; PNG files less than 1MB allowed.</span>`;
      t4 = space();
      div2 = element("div");
      div1 = element("div");
      span3 = element("span");
      t5 = space();
      span4 = element("span");
      span4.textContent = "Upload Icon";
      attr(span0, "class", "left svelte-1i7pjsy");
      attr(div0, "class", "disclaimer svelte-1i7pjsy");
      attr(span3, "class", "icon svelte-1i7pjsy");
      attr(span4, "class", "text svelte-1i7pjsy");
      attr(div1, "class", "upload svelte-1i7pjsy");
      attr(div2, "class", "actions svelte-1i7pjsy");
      attr(span5, "class", "right svelte-1i7pjsy");
      attr(div3, "class", "row svelte-1i7pjsy");
      attr(div4, "class", "area svelte-1i7pjsy");
      toggle_class(div4, "intent-person", "person" === ctx[2]);
    },
    m(target, anchor) {
      insert(target, div4, anchor);
      append(div4, div3);
      append(div3, span0);
      if (if_block)
        if_block.m(span0, null);
      append(div3, t0);
      append(div3, span5);
      append(span5, div0);
      append(span5, t4);
      append(span5, div2);
      append(div2, div1);
      append(div1, span3);
      span3.innerHTML = SX_ICON_IMAGE;
      append(div1, t5);
      append(div1, span4);
      current = true;
      if (!mounted) {
        dispose = listen(div1, "click", ctx[6]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (ctx2[0])
        if_block.p(ctx2, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div4);
      if (if_block)
        if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function instance$g($$self, $$props, $$invalidate) {
  let { pfpRef } = $$props;
  const p_pfp = pfpRef || "";
  let { name = "" } = $$props;
  const s_name = name;
  let { intent = "token" } = $$props;
  const si_intent = intent;
  (async () => {
    if (p_pfp) {
      await Pfps.at(p_pfp);
    }
  })();
  const click_handler2 = () => F_NOOP;
  $$self.$$set = ($$props2) => {
    if ("pfpRef" in $$props2)
      $$invalidate(3, pfpRef = $$props2.pfpRef);
    if ("name" in $$props2)
      $$invalidate(4, name = $$props2.name);
    if ("intent" in $$props2)
      $$invalidate(5, intent = $$props2.intent);
  };
  return [p_pfp, s_name, si_intent, pfpRef, name, intent, click_handler2];
}
class IconEditor extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$g, create_fragment$i, safe_not_equal, { pfpRef: 3, name: 4, intent: 5 });
  }
}
function create_default_slot_6$1(ctx) {
  let iconeditor;
  let updating_name;
  let current;
  function iconeditor_name_binding(value) {
    ctx[17](value);
  }
  let iconeditor_props = {
    intent: "person",
    pfpRef: ctx[0]?.pfp
  };
  if (ctx[1] !== void 0) {
    iconeditor_props.name = ctx[1];
  }
  iconeditor = new IconEditor({ props: iconeditor_props });
  binding_callbacks.push(() => bind(iconeditor, "name", iconeditor_name_binding));
  return {
    c() {
      create_component(iconeditor.$$.fragment);
    },
    m(target, anchor) {
      mount_component(iconeditor, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const iconeditor_changes = {};
      if (dirty & 1)
        iconeditor_changes.pfpRef = ctx2[0]?.pfp;
      if (!updating_name && dirty & 2) {
        updating_name = true;
        iconeditor_changes.name = ctx2[1];
        add_flush_callback(() => updating_name = false);
      }
      iconeditor.$set(iconeditor_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(iconeditor.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(iconeditor.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(iconeditor, detaching);
    }
  };
}
function create_default_slot_5$2(ctx) {
  let style;
  let t1;
  let span0;
  let t2_value = proper(ctx[9]) + "";
  let t2;
  let t3;
  let span1;
  let t4;
  let t5_value = ode(ctx[3]).filter(ctx[18]).map(func_1).join(", ") + "";
  let t5;
  let t6;
  return {
    c() {
      style = element("style");
      style.textContent = ".font-family_mono {\n  font-family: 'PT Mono';\n  white-space: pre;\n}\n.hide-scrollbar {\n  scrollbar-width: none;\n}\n.hide-scrollbar::-webkit-scrollbar {\n  display: none;\n}\n.hide-scrollbar::-webkit-scrollbar-track {\n  display: none;\n}\n.hide-scrollbar::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.title {\n  font-family: Poppins;\n  font-weight: 400;\n  font-size: 14px;\n  color: var(--theme-color-text-light);\n}\n.examples {\n  margin-left: 0.5em;\n}";
      t1 = space();
      span0 = element("span");
      t2 = text(t2_value);
      t3 = space();
      span1 = element("span");
      t4 = text("(");
      t5 = text(t5_value);
      t6 = text(")");
      attr(style, "lang", "less");
      attr(span0, "class", "title");
      attr(span1, "class", "examples");
    },
    m(target, anchor) {
      insert(target, style, anchor);
      insert(target, t1, anchor);
      insert(target, span0, anchor);
      append(span0, t2);
      insert(target, t3, anchor);
      insert(target, span1, anchor);
      append(span1, t4);
      append(span1, t5);
      append(span1, t6);
    },
    p(ctx2, dirty) {
      if (dirty & 512 && t2_value !== (t2_value = proper(ctx2[9]) + ""))
        set_data(t2, t2_value);
      if (dirty & 520 && t5_value !== (t5_value = ode(ctx2[3]).filter(ctx2[18]).map(func_1).join(", ") + ""))
        set_data(t5, t5_value);
    },
    d(detaching) {
      if (detaching)
        detach(style);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(span0);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(span1);
    }
  };
}
function create_default_slot_4$2(ctx) {
  let info;
  let current;
  info = new Info({
    props: {
      key: "chain-family",
      $$slots: { default: [create_default_slot_5$2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(info.$$.fragment);
    },
    m(target, anchor) {
      mount_component(info, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const info_changes = {};
      if (dirty & 268435976) {
        info_changes.$$scope = { dirty, ctx: ctx2 };
      }
      info.$set(info_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(info.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(info.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(info, detaching);
    }
  };
}
function create_if_block_1$2(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[4]);
      attr(span, "class", "validation-message");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 16)
        set_data(t, ctx2[4]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_default_slot_3$2(ctx) {
  let input;
  let t;
  let if_block_anchor;
  let mounted;
  let dispose;
  let if_block = ctx[4] && create_if_block_1$2(ctx);
  return {
    c() {
      input = element("input");
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr(input, "type", "text");
      attr(input, "spellcheck", "false");
      attr(input, "placeholder", "Enter a name");
      toggle_class(input, "invalid", ctx[4]);
    },
    m(target, anchor) {
      insert(target, input, anchor);
      set_input_value(input, ctx[1]);
      insert(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      if (!mounted) {
        dispose = listen(input, "input", ctx[19]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 2 && input.value !== ctx2[1]) {
        set_input_value(input, ctx2[1]);
      }
      if (dirty & 16) {
        toggle_class(input, "invalid", ctx2[4]);
      }
      if (ctx2[4]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1$2(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(input);
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$6(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[5]);
      attr(span, "class", "validation-message");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 32)
        set_data(t, ctx2[5]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_default_slot_2$2(ctx) {
  let input;
  let input_placeholder_value;
  let t;
  let if_block_anchor;
  let mounted;
  let dispose;
  let if_block = ctx[5] && create_if_block$6(ctx);
  return {
    c() {
      input = element("input");
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr(input, "type", "text");
      attr(input, "class", "address");
      attr(input, "spellcheck", "false");
      attr(input, "placeholder", input_placeholder_value = ctx[10].bech32s.acc + "1...");
      toggle_class(input, "invalid", ctx[5]);
    },
    m(target, anchor) {
      insert(target, input, anchor);
      set_input_value(input, ctx[2]);
      insert(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      if (!mounted) {
        dispose = listen(input, "input", ctx[20]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 1024 && input_placeholder_value !== (input_placeholder_value = ctx2[10].bech32s.acc + "1...")) {
        attr(input, "placeholder", input_placeholder_value);
      }
      if (dirty & 4 && input.value !== ctx2[2]) {
        set_input_value(input, ctx2[2]);
      }
      if (dirty & 32) {
        toggle_class(input, "invalid", ctx2[5]);
      }
      if (ctx2[5]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$6(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(input);
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot_1$3(ctx) {
  let textarea;
  let mounted;
  let dispose;
  return {
    c() {
      textarea = element("textarea");
      attr(textarea, "placeholder", "");
    },
    m(target, anchor) {
      insert(target, textarea, anchor);
      set_input_value(textarea, ctx[7]);
      if (!mounted) {
        dispose = listen(textarea, "input", ctx[21]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 128) {
        set_input_value(textarea, ctx2[7]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(textarea);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot$8(ctx) {
  let header;
  let t0;
  let field0;
  let t1;
  let field1;
  let t2;
  let field2;
  let t3;
  let field3;
  let t4;
  let field4;
  let t5;
  let hr;
  let t6;
  let h3;
  let t9;
  let inlinetags;
  let t10;
  let div;
  let button0;
  let t12;
  let button1;
  let t13_value = ctx[12] ? "Save" : "Add";
  let t13;
  let button1_readonly_value;
  let current;
  let mounted;
  let dispose;
  header = new Header({
    props: {
      plain: true,
      pops: true,
      title: (ctx[12] ? "Edit" : "Add New") + " Contact"
    }
  });
  field0 = new Field({
    props: {
      key: "contact-pfp",
      name: "Profile Icon",
      $$slots: { default: [create_default_slot_6$1] },
      $$scope: { ctx }
    }
  });
  field1 = new Field({
    props: {
      key: "chain-family",
      name: "Chain Family",
      $$slots: { default: [create_default_slot_4$2] },
      $$scope: { ctx }
    }
  });
  field2 = new Field({
    props: {
      key: "contact-name",
      name: "Name",
      $$slots: { default: [create_default_slot_3$2] },
      $$scope: { ctx }
    }
  });
  field3 = new Field({
    props: {
      key: "contact-address",
      name: "Address",
      $$slots: { default: [create_default_slot_2$2] },
      $$scope: { ctx }
    }
  });
  field4 = new Field({
    props: {
      key: "contact-notes",
      name: "Secure Notes",
      $$slots: { default: [create_default_slot_1$3] },
      $$scope: { ctx }
    }
  });
  inlinetags = new InlineTags({
    props: {
      editable: true,
      resourcePath: ctx[12]
    }
  });
  return {
    c() {
      create_component(header.$$.fragment);
      t0 = space();
      create_component(field0.$$.fragment);
      t1 = space();
      create_component(field1.$$.fragment);
      t2 = space();
      create_component(field2.$$.fragment);
      t3 = space();
      create_component(field3.$$.fragment);
      t4 = space();
      create_component(field4.$$.fragment);
      t5 = space();
      hr = element("hr");
      t6 = space();
      h3 = element("h3");
      h3.textContent = `${ctx[12] ? "Edit" : "Add"} Tags`;
      t9 = space();
      create_component(inlinetags.$$.fragment);
      t10 = space();
      div = element("div");
      button0 = element("button");
      button0.textContent = "Back";
      t12 = space();
      button1 = element("button");
      t13 = text(t13_value);
      attr(button1, "class", "primary");
      attr(button1, "readonly", button1_readonly_value = !ctx[8]);
      attr(div, "class", "action-line");
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert(target, t0, anchor);
      mount_component(field0, target, anchor);
      insert(target, t1, anchor);
      mount_component(field1, target, anchor);
      insert(target, t2, anchor);
      mount_component(field2, target, anchor);
      insert(target, t3, anchor);
      mount_component(field3, target, anchor);
      insert(target, t4, anchor);
      mount_component(field4, target, anchor);
      insert(target, t5, anchor);
      insert(target, hr, anchor);
      insert(target, t6, anchor);
      insert(target, h3, anchor);
      insert(target, t9, anchor);
      mount_component(inlinetags, target, anchor);
      insert(target, t10, anchor);
      insert(target, div, anchor);
      append(div, button0);
      append(div, t12);
      append(div, button1);
      append(button1, t13);
      current = true;
      if (!mounted) {
        dispose = [
          listen(button0, "click", ctx[22]),
          listen(button1, "click", ctx[23])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      const field0_changes = {};
      if (dirty & 268435459) {
        field0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field0.$set(field0_changes);
      const field1_changes = {};
      if (dirty & 268435976) {
        field1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field1.$set(field1_changes);
      const field2_changes = {};
      if (dirty & 268435474) {
        field2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field2.$set(field2_changes);
      const field3_changes = {};
      if (dirty & 268436516) {
        field3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field3.$set(field3_changes);
      const field4_changes = {};
      if (dirty & 268435584) {
        field4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field4.$set(field4_changes);
      if (!current || dirty & 256 && button1_readonly_value !== (button1_readonly_value = !ctx2[8])) {
        attr(button1, "readonly", button1_readonly_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(field0.$$.fragment, local);
      transition_in(field1.$$.fragment, local);
      transition_in(field2.$$.fragment, local);
      transition_in(field3.$$.fragment, local);
      transition_in(field4.$$.fragment, local);
      transition_in(inlinetags.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      transition_out(field0.$$.fragment, local);
      transition_out(field1.$$.fragment, local);
      transition_out(field2.$$.fragment, local);
      transition_out(field3.$$.fragment, local);
      transition_out(field4.$$.fragment, local);
      transition_out(inlinetags.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
      if (detaching)
        detach(t0);
      destroy_component(field0, detaching);
      if (detaching)
        detach(t1);
      destroy_component(field1, detaching);
      if (detaching)
        detach(t2);
      destroy_component(field2, detaching);
      if (detaching)
        detach(t3);
      destroy_component(field3, detaching);
      if (detaching)
        detach(t4);
      destroy_component(field4, detaching);
      if (detaching)
        detach(t5);
      if (detaching)
        detach(hr);
      if (detaching)
        detach(t6);
      if (detaching)
        detach(h3);
      if (detaching)
        detach(t9);
      destroy_component(inlinetags, detaching);
      if (detaching)
        detach(t10);
      if (detaching)
        detach(div);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$h(ctx) {
  let screen;
  let current;
  let screen_props = {
    leaves: true,
    $$slots: { default: [create_default_slot$8] },
    $$scope: { ctx }
  };
  screen = new Screen({ props: screen_props });
  ctx[24](screen);
  return {
    c() {
      create_component(screen.$$.fragment);
    },
    m(target, anchor) {
      mount_component(screen, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const screen_changes = {};
      if (dirty & 268437439) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[24](null);
      destroy_component(screen, detaching);
    }
  };
}
const func_1 = ([, g]) => g.bech32s.acc.hrp;
function instance$f($$self, $$props, $$invalidate) {
  let s_name;
  let s_addr;
  let sa_bech32;
  let s_notes;
  let si_agent_type;
  let b_form_valid;
  let $yw_family;
  let $yw_chain;
  component_subscribe($$self, yw_family, ($$value) => $$invalidate(9, $yw_family = $$value));
  component_subscribe($$self, yw_chain, ($$value) => $$invalidate(10, $yw_chain = $$value));
  const k_page = getContext("page");
  let { contactRef = "" } = $$props;
  const p_contact = contactRef || "";
  let g_contact;
  if (p_contact)
    void Agents.getContact(p_contact).then((g) => $$invalidate(0, g_contact = g));
  let h_chains = {};
  (async function load_chains() {
    $$invalidate(3, h_chains = ofe((await Chains.read()).entries()));
  })();
  let s_err_name = "";
  let s_err_address = "";
  function pubkey_from_addr(sa_address, b_show_err = false) {
    const m_bech = R_BECH32.exec(sa_address);
    if (!m_bech) {
      if (b_show_err) {
        $$invalidate(5, s_err_address = "Invalid Bech32 address");
      }
      return "";
    }
    const [, s_chain, s_pubkey_local] = m_bech;
    let k_chain_match = null;
    for (const [, k_chain] of ode(H_CHAINS)) {
      if (k_chain.def.bechPrefix === s_chain) {
        k_chain_match = k_chain;
        break;
      }
    }
    if (b_show_err) {
      if (!k_chain_match) {
        $$invalidate(5, s_err_address = `No Cosmos SDK chains matched '${s_chain}'`);
      } else {
        $$invalidate(5, s_err_address = "");
      }
    }
    return $$invalidate(16, s_addr = s_pubkey_local);
  }
  let c_show_validations = 0;
  let y_screen;
  async function save() {
    if (!b_form_valid) {
      $$invalidate(15, c_show_validations++, c_show_validations);
      return;
    } else if (p_contact) {
      Object.assign(g_contact, {
        name: s_name,
        address: s_addr,
        pfp: g_contact.pfp,
        agentType: si_agent_type,
        notes: s_notes
      });
      k_page.reset();
    } else {
      $$invalidate(0, g_contact = {
        name: s_name,
        family: $yw_family,
        address: s_addr,
        pfp: g_contact.pfp,
        agentType: si_agent_type,
        notes: s_notes,
        space: "acc",
        origin: "user",
        chains: {}
      });
    }
    try {
      await Agents.open(async (ks_agents) => {
        await ks_agents.putContact(g_contact);
      });
      k_page.reset();
      k_page.push({
        creator: ContactView,
        props: { contactRef: p_contact }
      });
    } catch (e_write) {
    }
  }
  function iconeditor_name_binding(value) {
    s_name = value;
    $$invalidate(1, s_name), $$invalidate(0, g_contact);
  }
  const func = ([, g]) => $yw_family === g.family;
  function input_input_handler() {
    s_name = this.value;
    $$invalidate(1, s_name), $$invalidate(0, g_contact);
  }
  function input_input_handler_1() {
    sa_bech32 = this.value;
    $$invalidate(2, sa_bech32), $$invalidate(16, s_addr), $$invalidate(0, g_contact);
  }
  function textarea_input_handler() {
    s_notes = this.value;
    $$invalidate(7, s_notes), $$invalidate(0, g_contact);
  }
  const click_handler2 = () => k_page.pop();
  const click_handler_1 = () => save();
  function screen_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      y_screen = $$value;
      $$invalidate(6, y_screen);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("contactRef" in $$props2)
      $$invalidate(14, contactRef = $$props2.contactRef);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $$invalidate(1, s_name = g_contact?.name || "");
    }
    if ($$self.$$.dirty & 1) {
      $$invalidate(16, s_addr = g_contact?.address || "");
    }
    if ($$self.$$.dirty & 65536) {
      $$invalidate(2, sa_bech32 = s_addr ? Chains.bech32(s_addr) : "");
    }
    if ($$self.$$.dirty & 1) {
      $$invalidate(7, s_notes = g_contact?.notes || "");
    }
    if ($$self.$$.dirty & 1) {
      si_agent_type = g_contact?.agentType || ContactAgentType.PERSON;
    }
    if ($$self.$$.dirty & 6) {
      $$invalidate(8, b_form_valid = !!(s_name && pubkey_from_addr(sa_bech32)));
    }
    if ($$self.$$.dirty & 32774) {
      {
        if (c_show_validations) {
          $$invalidate(4, s_err_name = s_name ? "" : "Name must not be empty");
          pubkey_from_addr(sa_bech32, true);
        }
      }
    }
  };
  return [
    g_contact,
    s_name,
    sa_bech32,
    h_chains,
    s_err_name,
    s_err_address,
    y_screen,
    s_notes,
    b_form_valid,
    $yw_family,
    $yw_chain,
    k_page,
    p_contact,
    save,
    contactRef,
    c_show_validations,
    s_addr,
    iconeditor_name_binding,
    func,
    input_input_handler,
    input_input_handler_1,
    textarea_input_handler,
    click_handler2,
    click_handler_1,
    screen_binding
  ];
}
class ContactEdit extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$f, create_fragment$h, safe_not_equal, { contactRef: 14 });
  }
}
var SX_ICON_DOTS = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n	<style type="text/css">\n		.s2r-more-vert-fg {\n			fill: var(--svg-color-fg, currentColor);\n		}\n	</style>\n	<path class="s2r-more-vert-fg" d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="#FFB61A"/>\n</svg>\n';
var SX_ICON_SEND = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n	<path style="fill: var(--svg-color-fg,currentColor);" d="M9 16h6v-6h4l-7-7-7 7h4v6zm3-10.17L14.17 8H13v6h-2V8H9.83L12 5.83zM5 18h14v2H5z"/>\n</svg>';
function get_each_context$5(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[13] = list[i][0];
  child_ctx[14] = list[i][1];
  return child_ctx;
}
function get_each_context_1$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[17] = list[i];
  return child_ctx;
}
function create_catch_block$4(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block$4(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[12];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$5(get_each_context$5(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 63) {
        each_value = ctx2[12];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$5(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$5(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_detail_slot(ctx) {
  let address;
  let t;
  let current;
  address = new Address({
    props: {
      address: Chains.bech32(ctx[14].address + "")
    }
  });
  return {
    c() {
      create_component(address.$$.fragment);
      t = space();
    },
    m(target, anchor) {
      mount_component(address, target, anchor);
      insert(target, t, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(address.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(address.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(address, detaching);
      if (detaching)
        detach(t);
    }
  };
}
function create_prefix_slot(ctx) {
  let span;
  return {
    c() {
      span = element("span");
      attr(span, "class", "icon contact-type svelte-1l93agm");
      attr(span, "slot", "prefix");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      span.innerHTML = SX_ICON_CONTACTS;
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_tags_slot(ctx) {
  let inlinetags;
  let t;
  let current;
  inlinetags = new InlineTags({
    props: {
      collapsed: true,
      rootStyle: "margin: 0px;",
      resourcePath: ctx[13],
      $$slots: { prefix: [create_prefix_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(inlinetags.$$.fragment);
      t = space();
    },
    m(target, anchor) {
      mount_component(inlinetags, target, anchor);
      insert(target, t, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const inlinetags_changes = {};
      if (dirty & 1048576) {
        inlinetags_changes.$$scope = { dirty, ctx: ctx2 };
      }
      inlinetags.$set(inlinetags_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(inlinetags.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inlinetags.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(inlinetags, detaching);
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block$5(ctx) {
  let span;
  let span_transition;
  let current;
  let each_value_1 = ctx[5];
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
  }
  return {
    c() {
      span = element("span");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(span, "class", "overlay");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(span, null);
      }
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 36) {
        each_value_1 = ctx[5];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1$1(ctx, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1$1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(span, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!span_transition)
          span_transition = create_bidirectional_transition(span, slide, { duration: 300, easing: quintOut }, true);
        span_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!span_transition)
        span_transition = create_bidirectional_transition(span, slide, { duration: 300, easing: quintOut }, false);
      span_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      destroy_each(each_blocks, detaching);
      if (detaching && span_transition)
        span_transition.end();
    }
  };
}
function create_each_block_1$1(ctx) {
  let div;
  let span0;
  let raw_value = ctx[17].icon + "";
  let t0;
  let span1;
  let t1_value = ctx[17].label + "";
  let t1;
  let t2;
  let mounted;
  let dispose;
  function click_handler2(...args) {
    return ctx[9](ctx[17], ctx[14], ...args);
  }
  return {
    c() {
      div = element("div");
      span0 = element("span");
      t0 = space();
      span1 = element("span");
      t1 = text(t1_value);
      t2 = space();
      attr(span0, "class", "icon");
      attr(span1, "class", "text");
      attr(div, "class", "action");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, span0);
      span0.innerHTML = raw_value;
      append(div, t0);
      append(div, span1);
      append(span1, t1);
      append(div, t2);
      if (!mounted) {
        dispose = listen(div, "click", click_handler2);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_status_slot(ctx) {
  let span;
  let t0;
  let t1;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[0] === ctx[13] && create_if_block$5(ctx);
  return {
    c() {
      span = element("span");
      t0 = space();
      if (if_block)
        if_block.c();
      t1 = space();
      attr(span, "class", "icon more-menu");
      toggle_class(span, "active", ctx[0] === ctx[13]);
    },
    m(target, anchor) {
      insert(target, span, anchor);
      span.innerHTML = SX_ICON_DOTS;
      insert(target, t0, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, t1, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(span, "click", ctx[4](ctx[13], ctx[14]));
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 5) {
        toggle_class(span, "active", ctx[0] === ctx[13]);
      }
      if (ctx[0] === ctx[13]) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$5(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(t1.parentNode, t1);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if (detaching)
        detach(t0);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t1);
      mounted = false;
      dispose();
    }
  };
}
function create_each_block$5(ctx) {
  let row;
  let current;
  function click_handler_1(...args) {
    return ctx[10](ctx[14], ...args);
  }
  row = new Row({
    props: {
      resource: ctx[14],
      resourcePath: ctx[13],
      $$slots: {
        status: [create_status_slot],
        tags: [create_tags_slot],
        detail: [create_detail_slot]
      },
      $$scope: { ctx }
    }
  });
  row.$on("click", click_handler_1);
  return {
    c() {
      create_component(row.$$.fragment);
    },
    m(target, anchor) {
      mount_component(row, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const row_changes = {};
      if (dirty & 1048577) {
        row_changes.$$scope = { dirty, ctx };
      }
      row.$set(row_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(row.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(row.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(row, detaching);
    }
  };
}
function create_pending_block$4(ctx) {
  let t;
  return {
    c() {
      t = text("Loading contacts...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$g(ctx) {
  let div;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$4,
    then: create_then_block$4,
    catch: create_catch_block$4,
    value: 12,
    blocks: [, , ,]
  };
  handle_promise(ctx[2](), info);
  return {
    c() {
      div = element("div");
      info.block.c();
      attr(div, "class", "rows svelte-1l93agm");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      info.block.m(div, info.anchor = null);
      info.mount = () => div;
      info.anchor = null;
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      info.block.d();
      info.token = null;
      info = null;
    }
  };
}
function instance$e($$self, $$props, $$invalidate) {
  let $yw_family;
  component_subscribe($$self, yw_family, ($$value) => $$invalidate(11, $yw_family = $$value));
  const k_page = getContext("page");
  let { filter = (g) => true } = $$props;
  let { sort = (g_a, g_b) => g_a.name < g_b.name ? -1 : 1 } = $$props;
  let { append: append2 = [] } = $$props;
  async function load_contacts() {
    const ks_agents = await Agents.read();
    return [...ks_agents.contacts($yw_family)];
  }
  const hm_events = /* @__PURE__ */ new WeakMap();
  let si_overlay = "";
  function activate_overlay(p_contact, g_contact) {
    return (d_event) => {
      d_event.stopImmediatePropagation();
      const si_set = p_contact;
      if (hm_events.get(d_event)?.cancelMenu === si_set) {
        $$invalidate(0, si_overlay = "");
        return;
      }
      $$invalidate(0, si_overlay = si_set);
      window.addEventListener(
        "click",
        () => {
          hm_events.set(d_event, { cancelMenu: si_overlay });
          $$invalidate(0, si_overlay = "");
        },
        { capture: true, once: true }
      );
    };
  }
  const a_overlay_actions = [
    {
      label: "Edit",
      icon: SX_ICON_EDIT,
      click(g_contact) {
        k_page.push({
          creator: ContactEdit,
          props: { contact: g_contact }
        });
      }
    },
    {
      label: "Send",
      icon: SX_ICON_SEND,
      click(g_contact) {
        k_page.push({
          creator: Send,
          props: {
            recipient: Chains.bech32(g_contact.address)
          }
        });
      }
    },
    {
      label: "Delete",
      icon: SX_ICON_DELETE,
      click(g_contact) {
        k_page.push({ creator: DeadEnd, props: {} });
      }
    }
  ];
  const click_handler2 = (g_action, g_contact, d_event) => {
    d_event.stopPropagation();
    g_action.click(g_contact);
  };
  const click_handler_1 = (g_contact, d_event) => {
    if (!hm_events.get(d_event)?.cancelMenu) {
      k_page.push({
        creator: ContactView,
        props: { contact: g_contact }
      });
    }
  };
  $$self.$$set = ($$props2) => {
    if ("filter" in $$props2)
      $$invalidate(6, filter = $$props2.filter);
    if ("sort" in $$props2)
      $$invalidate(7, sort = $$props2.sort);
    if ("append" in $$props2)
      $$invalidate(8, append2 = $$props2.append);
  };
  return [
    si_overlay,
    k_page,
    load_contacts,
    hm_events,
    activate_overlay,
    a_overlay_actions,
    filter,
    sort,
    append2,
    click_handler2,
    click_handler_1
  ];
}
class ContactList extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$e, create_fragment$g, safe_not_equal, { filter: 6, sort: 7, append: 8 });
  }
}
function create_default_slot_8(ctx) {
  let t;
  return {
    c() {
      t = text("All");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_7(ctx) {
  let t;
  return {
    c() {
      t = text("Humans");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_6(ctx) {
  let t;
  return {
    c() {
      t = text("Contracts");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_5$1(ctx) {
  let tab0;
  let t0;
  let tab1;
  let t1;
  let tab2;
  let current;
  tab0 = new Tab({
    props: {
      $$slots: { default: [create_default_slot_8] },
      $$scope: { ctx }
    }
  });
  tab1 = new Tab({
    props: {
      $$slots: { default: [create_default_slot_7] },
      $$scope: { ctx }
    }
  });
  tab2 = new Tab({
    props: {
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(tab0.$$.fragment);
      t0 = space();
      create_component(tab1.$$.fragment);
      t1 = space();
      create_component(tab2.$$.fragment);
    },
    m(target, anchor) {
      mount_component(tab0, target, anchor);
      insert(target, t0, anchor);
      mount_component(tab1, target, anchor);
      insert(target, t1, anchor);
      mount_component(tab2, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tab0_changes = {};
      if (dirty & 8) {
        tab0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tab0.$set(tab0_changes);
      const tab1_changes = {};
      if (dirty & 8) {
        tab1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tab1.$set(tab1_changes);
      const tab2_changes = {};
      if (dirty & 8) {
        tab2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tab2.$set(tab2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tab0.$$.fragment, local);
      transition_in(tab1.$$.fragment, local);
      transition_in(tab2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tab0.$$.fragment, local);
      transition_out(tab1.$$.fragment, local);
      transition_out(tab2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tab0, detaching);
      if (detaching)
        detach(t0);
      destroy_component(tab1, detaching);
      if (detaching)
        detach(t1);
      destroy_component(tab2, detaching);
    }
  };
}
function create_default_slot_4$1(ctx) {
  let contactlist;
  let current;
  contactlist = new ContactList({});
  return {
    c() {
      create_component(contactlist.$$.fragment);
    },
    m(target, anchor) {
      mount_component(contactlist, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(contactlist.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(contactlist.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(contactlist, detaching);
    }
  };
}
function create_default_slot_3$1(ctx) {
  let contactlist;
  let current;
  contactlist = new ContactList({ props: { filter: ctx[0] } });
  return {
    c() {
      create_component(contactlist.$$.fragment);
    },
    m(target, anchor) {
      mount_component(contactlist, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(contactlist.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(contactlist.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(contactlist, detaching);
    }
  };
}
function create_default_slot_2$1(ctx) {
  let contactlist;
  let current;
  contactlist = new ContactList({ props: { filter: ctx[1] } });
  return {
    c() {
      create_component(contactlist.$$.fragment);
    },
    m(target, anchor) {
      mount_component(contactlist, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(contactlist.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(contactlist.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(contactlist, detaching);
    }
  };
}
function create_default_slot_1$2(ctx) {
  let tablist;
  let t0;
  let tabpanel0;
  let t1;
  let tabpanel1;
  let t2;
  let tabpanel2;
  let current;
  tablist = new TabList({
    props: {
      $$slots: { default: [create_default_slot_5$1] },
      $$scope: { ctx }
    }
  });
  tabpanel0 = new TabPanel({
    props: {
      $$slots: { default: [create_default_slot_4$1] },
      $$scope: { ctx }
    }
  });
  tabpanel1 = new TabPanel({
    props: {
      $$slots: { default: [create_default_slot_3$1] },
      $$scope: { ctx }
    }
  });
  tabpanel2 = new TabPanel({
    props: {
      $$slots: { default: [create_default_slot_2$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(tablist.$$.fragment);
      t0 = space();
      create_component(tabpanel0.$$.fragment);
      t1 = space();
      create_component(tabpanel1.$$.fragment);
      t2 = space();
      create_component(tabpanel2.$$.fragment);
    },
    m(target, anchor) {
      mount_component(tablist, target, anchor);
      insert(target, t0, anchor);
      mount_component(tabpanel0, target, anchor);
      insert(target, t1, anchor);
      mount_component(tabpanel1, target, anchor);
      insert(target, t2, anchor);
      mount_component(tabpanel2, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tablist_changes = {};
      if (dirty & 8) {
        tablist_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tablist.$set(tablist_changes);
      const tabpanel0_changes = {};
      if (dirty & 8) {
        tabpanel0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tabpanel0.$set(tabpanel0_changes);
      const tabpanel1_changes = {};
      if (dirty & 8) {
        tabpanel1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tabpanel1.$set(tabpanel1_changes);
      const tabpanel2_changes = {};
      if (dirty & 8) {
        tabpanel2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tabpanel2.$set(tabpanel2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tablist.$$.fragment, local);
      transition_in(tabpanel0.$$.fragment, local);
      transition_in(tabpanel1.$$.fragment, local);
      transition_in(tabpanel2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tablist.$$.fragment, local);
      transition_out(tabpanel0.$$.fragment, local);
      transition_out(tabpanel1.$$.fragment, local);
      transition_out(tabpanel2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tablist, detaching);
      if (detaching)
        detach(t0);
      destroy_component(tabpanel0, detaching);
      if (detaching)
        detach(t1);
      destroy_component(tabpanel1, detaching);
      if (detaching)
        detach(t2);
      destroy_component(tabpanel2, detaching);
    }
  };
}
function create_default_slot$7(ctx) {
  let header;
  let t0;
  let subheader;
  let t1;
  let tabs;
  let current;
  header = new Header({
    props: {
      search: true,
      network: true,
      account: true
    }
  });
  subheader = new SubHeader({ props: { title: "Contacts" } });
  tabs = new Tabs({
    props: {
      $$slots: { default: [create_default_slot_1$2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(header.$$.fragment);
      t0 = space();
      create_component(subheader.$$.fragment);
      t1 = space();
      create_component(tabs.$$.fragment);
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert(target, t0, anchor);
      mount_component(subheader, target, anchor);
      insert(target, t1, anchor);
      mount_component(tabs, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tabs_changes = {};
      if (dirty & 8) {
        tabs_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tabs.$set(tabs_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(subheader.$$.fragment, local);
      transition_in(tabs.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      transition_out(subheader.$$.fragment, local);
      transition_out(tabs.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
      if (detaching)
        detach(t0);
      destroy_component(subheader, detaching);
      if (detaching)
        detach(t1);
      destroy_component(tabs, detaching);
    }
  };
}
function create_fragment$f(ctx) {
  let screen;
  let current;
  screen = new Screen({
    props: {
      nav: true,
      root: true,
      classNames: "contacts",
      $$slots: { default: [create_default_slot$7] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(screen.$$.fragment);
    },
    m(target, anchor) {
      mount_component(screen, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const screen_changes = {};
      if (dirty & 8) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(screen, detaching);
    }
  };
}
function instance$d($$self) {
  getContext("page");
  const func = (g_contact) => ContactAgentType.PERSON === g_contact.agentType;
  const func_12 = (g_contact) => ContactAgentType.CONTRACT === g_contact.agentType;
  return [func, func_12];
}
class ContactsHome extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$d, create_fragment$f, safe_not_equal, {});
  }
}
function get_each_context$4(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i][0];
  child_ctx[5] = list[i][1];
  return child_ctx;
}
function create_catch_block$3(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block$3(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[3];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$4(get_each_context$4(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 3) {
        each_value = ctx2[3];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$4(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$4(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block$4(ctx) {
  let row;
  let current;
  row = new Row({
    props: {
      pfp: ctx[5].pfp,
      name: ctx[5].host,
      resourcePath: ctx[4],
      iconClass: "square pfp"
    }
  });
  row.$on("click", ctx[2]);
  return {
    c() {
      create_component(row.$$.fragment);
    },
    m(target, anchor) {
      mount_component(row, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(row.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(row.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(row, detaching);
    }
  };
}
function create_pending_block$3(ctx) {
  let t;
  return {
    c() {
      t = text("Loading...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot$6(ctx) {
  let header;
  let t0;
  let subheader;
  let t1;
  let div;
  let current;
  header = new Header({
    props: {
      search: true,
      network: true,
      account: true
    }
  });
  subheader = new SubHeader({
    props: { bare: true, title: "Sites / Apps" }
  });
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$3,
    then: create_then_block$3,
    catch: create_catch_block$3,
    value: 3,
    blocks: [, , ,]
  };
  handle_promise(ctx[1](), info);
  return {
    c() {
      create_component(header.$$.fragment);
      t0 = space();
      create_component(subheader.$$.fragment);
      t1 = space();
      div = element("div");
      info.block.c();
      attr(div, "class", "rows no-margin");
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert(target, t0, anchor);
      mount_component(subheader, target, anchor);
      insert(target, t1, anchor);
      insert(target, div, anchor);
      info.block.m(div, info.anchor = null);
      info.mount = () => div;
      info.anchor = null;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(subheader.$$.fragment, local);
      transition_in(info.block);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      transition_out(subheader.$$.fragment, local);
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
      if (detaching)
        detach(t0);
      destroy_component(subheader, detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div);
      info.block.d();
      info.token = null;
      info = null;
    }
  };
}
function create_fragment$e(ctx) {
  let screen;
  let current;
  screen = new Screen({
    props: {
      debug: "SitesHome",
      nav: true,
      root: true,
      $$slots: { default: [create_default_slot$6] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(screen.$$.fragment);
    },
    m(target, anchor) {
      mount_component(screen, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const screen_changes = {};
      if (dirty & 256) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(screen, detaching);
    }
  };
}
function instance$c($$self) {
  const k_page = getContext("page");
  async function load_apps() {
    const ks_apps = await Apps.read();
    return ks_apps.entries();
  }
  const click_handler2 = () => {
    k_page.push({});
  };
  return [k_page, load_apps, click_handler2];
}
class SitesHome extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$c, create_fragment$e, safe_not_equal, {});
  }
}
function create_else_block$2(ctx) {
  let portrait;
  let t0;
  let field;
  let t1;
  let if_block_anchor;
  let current;
  portrait = new Portrait({
    props: {
      resource: ctx[0],
      resourcePath: ctx[2],
      actions: ctx[3],
      $$slots: {
        subtitle: [create_subtitle_slot],
        default: [create_default_slot_5]
      },
      $$scope: { ctx }
    }
  });
  field = new Field({
    props: {
      name: "gRPC-web URL",
      key: "grpc-web",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  let if_block = ctx[0].rpcHost && create_if_block_1$1(ctx);
  return {
    c() {
      create_component(portrait.$$.fragment);
      t0 = space();
      create_component(field.$$.fragment);
      t1 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      mount_component(portrait, target, anchor);
      insert(target, t0, anchor);
      mount_component(field, target, anchor);
      insert(target, t1, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const portrait_changes = {};
      if (dirty & 1)
        portrait_changes.resource = ctx2[0];
      if (dirty & 130) {
        portrait_changes.$$scope = { dirty, ctx: ctx2 };
      }
      portrait.$set(portrait_changes);
      const field_changes = {};
      if (dirty & 129) {
        field_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field.$set(field_changes);
      if (ctx2[0].rpcHost) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(portrait.$$.fragment, local);
      transition_in(field.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(portrait.$$.fragment, local);
      transition_out(field.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      destroy_component(portrait, detaching);
      if (detaching)
        detach(t0);
      destroy_component(field, detaching);
      if (detaching)
        detach(t1);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block$4(ctx) {
  let t;
  return {
    c() {
      t = text("Loading network...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_5(ctx) {
  let t;
  return {
    c() {
      t = text("address");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_subtitle_slot(ctx) {
  let span;
  let t0_value = ctx[1].name + "";
  let t0;
  let t1;
  let t2_value = ctx[1].id + "";
  let t2;
  let t3;
  return {
    c() {
      span = element("span");
      t0 = text(t0_value);
      t1 = text(" (");
      t2 = text(t2_value);
      t3 = text(")");
      attr(span, "class", "font-family_mono svelte-yy3tbl");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t0);
      append(span, t1);
      append(span, t2);
      append(span, t3);
    },
    p(ctx2, dirty) {
      if (dirty & 2 && t0_value !== (t0_value = ctx2[1].name + ""))
        set_data(t0, t0_value);
      if (dirty & 2 && t2_value !== (t2_value = ctx2[1].id + ""))
        set_data(t2, t2_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_default_slot_4(ctx) {
  let t_value = ctx[0].grpcWebUrl + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[0].grpcWebUrl + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_3(ctx) {
  let info;
  let current;
  info = new Info({
    props: {
      key: "grpc-web-value",
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(info.$$.fragment);
    },
    m(target, anchor) {
      mount_component(info, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const info_changes = {};
      if (dirty & 129) {
        info_changes.$$scope = { dirty, ctx: ctx2 };
      }
      info.$set(info_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(info.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(info.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(info, detaching);
    }
  };
}
function create_if_block_1$1(ctx) {
  let field;
  let current;
  field = new Field({
    props: {
      name: "RPC Host",
      key: "rpc",
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(field.$$.fragment);
    },
    m(target, anchor) {
      mount_component(field, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const field_changes = {};
      if (dirty & 129) {
        field_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field.$set(field_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(field.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(field.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(field, detaching);
    }
  };
}
function create_default_slot_2(ctx) {
  let t_value = ctx[0].rpcHost + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[0].rpcHost + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_1$1(ctx) {
  let info;
  let current;
  info = new Info({
    props: {
      key: "rpc-value",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(info.$$.fragment);
    },
    m(target, anchor) {
      mount_component(info, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const info_changes = {};
      if (dirty & 129) {
        info_changes.$$scope = { dirty, ctx: ctx2 };
      }
      info.$set(info_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(info.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(info.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(info, detaching);
    }
  };
}
function create_default_slot$5(ctx) {
  let header;
  let t0;
  let current_block_type_index;
  let if_block;
  let t1;
  let gap;
  let current;
  header = new Header({
    props: {
      pops: true,
      search: true,
      network: true,
      account: true
    }
  });
  const if_block_creators = [create_if_block$4, create_else_block$2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!ctx2[1])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  gap = new Gap({});
  return {
    c() {
      create_component(header.$$.fragment);
      t0 = space();
      if_block.c();
      t1 = space();
      create_component(gap.$$.fragment);
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert(target, t0, anchor);
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, t1, anchor);
      mount_component(gap, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(t1.parentNode, t1);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(if_block);
      transition_in(gap.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      transition_out(if_block);
      transition_out(gap.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
      if (detaching)
        detach(t0);
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(t1);
      destroy_component(gap, detaching);
    }
  };
}
function create_fragment$d(ctx) {
  let screen;
  let current;
  screen = new Screen({
    props: {
      nav: true,
      slides: true,
      $$slots: { default: [create_default_slot$5] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(screen.$$.fragment);
    },
    m(target, anchor) {
      mount_component(screen, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const screen_changes = {};
      if (dirty & 131) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(screen, detaching);
    }
  };
}
function instance$b($$self, $$props, $$invalidate) {
  let p_chain;
  let { networkRef } = $$props;
  const p_network = networkRef;
  let g_network;
  void Networks.at(p_network).then((g) => $$invalidate(0, g_network = g));
  let g_chain;
  getContext("page");
  const gc_actions = {};
  $$self.$$set = ($$props2) => {
    if ("networkRef" in $$props2)
      $$invalidate(4, networkRef = $$props2.networkRef);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $$invalidate(5, p_chain = g_network?.chain);
    }
    if ($$self.$$.dirty & 32) {
      if (p_chain) {
        void Chains.at(p_chain).then((g) => $$invalidate(1, g_chain = g));
      }
    }
  };
  return [g_network, g_chain, p_network, gc_actions, networkRef, p_chain];
}
class NetworkView extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$b, create_fragment$d, safe_not_equal, { networkRef: 4 });
  }
}
function get_each_context$3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i][0];
  child_ctx[7] = list[i][1];
  const constants_0 = child_ctx[0].at(child_ctx[7].chain);
  child_ctx[8] = constants_0;
  return child_ctx;
}
function create_catch_block$2(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block$2(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[5];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 7) {
        each_value = ctx2[5];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$3(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$3(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block$3(ctx) {
  let row;
  let current;
  function click_handler2() {
    return ctx[3](ctx[6]);
  }
  row = new Row({
    props: {
      resource: ctx[7],
      resourcePath: ctx[6],
      iconClass: "square pfp",
      detail: `${ctx[8]?.name} (${ctx[8]?.id})`
    }
  });
  row.$on("click", click_handler2);
  return {
    c() {
      create_component(row.$$.fragment);
    },
    m(target, anchor) {
      mount_component(row, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const row_changes = {};
      if (dirty & 1)
        row_changes.detail = `${ctx[8]?.name} (${ctx[8]?.id})`;
      row.$set(row_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(row.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(row.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(row, detaching);
    }
  };
}
function create_pending_block$2(ctx) {
  let t;
  return {
    c() {
      t = text("Loading...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot$4(ctx) {
  let header;
  let t0;
  let subheader;
  let t1;
  let div;
  let current;
  header = new Header({
    props: {
      search: true,
      network: true,
      account: true
    }
  });
  subheader = new SubHeader({ props: { bare: true, title: "Networks" } });
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$2,
    then: create_then_block$2,
    catch: create_catch_block$2,
    value: 5,
    blocks: [, , ,]
  };
  handle_promise(ctx[2](), info);
  return {
    c() {
      create_component(header.$$.fragment);
      t0 = space();
      create_component(subheader.$$.fragment);
      t1 = space();
      div = element("div");
      info.block.c();
      attr(div, "class", "rows no-margin");
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert(target, t0, anchor);
      mount_component(subheader, target, anchor);
      insert(target, t1, anchor);
      insert(target, div, anchor);
      info.block.m(div, info.anchor = null);
      info.mount = () => div;
      info.anchor = null;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(subheader.$$.fragment, local);
      transition_in(info.block);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      transition_out(subheader.$$.fragment, local);
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
      if (detaching)
        detach(t0);
      destroy_component(subheader, detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div);
      info.block.d();
      info.token = null;
      info = null;
    }
  };
}
function create_fragment$c(ctx) {
  let screen;
  let current;
  screen = new Screen({
    props: {
      debug: "NetworksHome",
      nav: true,
      root: true,
      $$slots: { default: [create_default_slot$4] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(screen.$$.fragment);
    },
    m(target, anchor) {
      mount_component(screen, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const screen_changes = {};
      if (dirty & 2049) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(screen, detaching);
    }
  };
}
function instance$a($$self, $$props, $$invalidate) {
  const k_page = getContext("page");
  let ks_chains;
  let ks_networks;
  async function load_networks() {
    $$invalidate(0, [ks_chains, ks_networks] = await Promise.all([Chains.read(), Networks.read()]), ks_chains);
    return ks_networks.entries();
  }
  const click_handler2 = (p_network) => {
    k_page.push({
      creator: NetworkView,
      props: { networkRef: p_network }
    });
  };
  return [ks_chains, k_page, load_networks, click_handler2];
}
class NetworksHome extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$a, create_fragment$c, safe_not_equal, {});
  }
}
function get_then_context(ctx) {
  const constants_0 = ctx[2].raw;
  ctx[3] = constants_0;
}
function create_catch_block$1(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block$1(ctx) {
  get_then_context(ctx);
  let txnlist;
  let current;
  txnlist = new TxnList({ props: { events: ctx[3] } });
  return {
    c() {
      create_component(txnlist.$$.fragment);
    },
    m(target, anchor) {
      mount_component(txnlist, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      get_then_context(ctx2);
    },
    i(local) {
      if (current)
        return;
      transition_in(txnlist.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(txnlist.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(txnlist, detaching);
    }
  };
}
function create_pending_block$1(ctx) {
  let t;
  return {
    c() {
      t = text("Loading history...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_key_block(ctx) {
  let await_block_anchor;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$1,
    then: create_then_block$1,
    catch: create_catch_block$1,
    value: 2,
    blocks: [, , ,]
  };
  handle_promise(Events.read(), info);
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    m(target, anchor) {
      insert(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function create_default_slot$3(ctx) {
  let header;
  let t0;
  let subheader;
  let t1;
  let previous_key = ctx[0];
  let key_block_anchor;
  let current;
  header = new Header({
    props: {
      search: true,
      network: true,
      account: true
    }
  });
  subheader = new SubHeader({ props: { title: "History", bare: true } });
  let key_block = create_key_block(ctx);
  return {
    c() {
      create_component(header.$$.fragment);
      t0 = space();
      create_component(subheader.$$.fragment);
      t1 = space();
      key_block.c();
      key_block_anchor = empty();
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert(target, t0, anchor);
      mount_component(subheader, target, anchor);
      insert(target, t1, anchor);
      key_block.m(target, anchor);
      insert(target, key_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 1 && safe_not_equal(previous_key, previous_key = ctx2[0])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block(ctx2);
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx2, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(subheader.$$.fragment, local);
      transition_in(key_block);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      transition_out(subheader.$$.fragment, local);
      transition_out(key_block);
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
      if (detaching)
        detach(t0);
      destroy_component(subheader, detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(key_block_anchor);
      key_block.d(detaching);
    }
  };
}
function create_fragment$b(ctx) {
  let screen;
  let current;
  screen = new Screen({
    props: {
      nav: true,
      root: true,
      $$slots: { default: [create_default_slot$3] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(screen.$$.fragment);
    },
    m(target, anchor) {
      mount_component(screen, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const screen_changes = {};
      if (dirty & 17) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(screen, detaching);
    }
  };
}
function instance$9($$self, $$props, $$invalidate) {
  let c_reloads = 1;
  const f_unsubscribe = global_receive({
    updateStore({ key: si_store }) {
      if ("events" === si_store) {
        $$invalidate(0, c_reloads++, c_reloads);
      }
    }
  });
  onDestroy(() => {
    f_unsubscribe();
  });
  return [c_reloads];
}
class HistoryHome extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$b, safe_not_equal, {});
  }
}
var ThreadId = /* @__PURE__ */ ((ThreadId2) => {
  ThreadId2["DEFAULT"] = "default";
  ThreadId2["INIT"] = "init";
  ThreadId2["SEARCH"] = "search";
  ThreadId2["TOKENS"] = "tokens";
  ThreadId2["NFTS"] = "nfts";
  ThreadId2["CONTACTS"] = "contacts";
  ThreadId2["HISTORY"] = "history";
  ThreadId2["NETWORKS"] = "networks";
  ThreadId2["ACCOUNTS"] = "accounts";
  ThreadId2["TAGS"] = "tags";
  ThreadId2["SITES"] = "sites";
  return ThreadId2;
})(ThreadId || {});
const H_THREADS = {
  ["default"]: Blank,
  ["init"]: Register,
  ["tokens"]: HoldingsHome,
  ["contacts"]: ContactsHome,
  ["history"]: HistoryHome,
  ["networks"]: NetworksHome,
  ["accounts"]: AccountsHome,
  ["sites"]: SitesHome
};
var Overscroll_svelte_svelte_type_style_lang = "";
function create_fragment$a(ctx) {
  let svg;
  let style;
  let t;
  let circle0;
  let circle1;
  let circle2;
  return {
    c() {
      svg = svg_element("svg");
      style = svg_element("style");
      t = text(".overscroll .bg {\n  fill: var(--theme-color-text-light);\n}\n.overscroll .ring {\n  fill: transparent;\n  stroke: #c4c4c4;\n}\n.overscroll .progress {\n  fill: transparent;\n  stroke: black;\n}\n");
      circle0 = svg_element("circle");
      circle1 = svg_element("circle");
      circle2 = svg_element("circle");
      attr(style, "lang", "less");
      attr(circle0, "cx", "16");
      attr(circle0, "cy", "16");
      attr(circle0, "r", "16");
      attr(circle0, "class", "bg");
      attr(circle1, "cx", "16");
      attr(circle1, "cy", "16");
      attr(circle1, "r", "10");
      attr(circle1, "class", "ring");
      attr(circle1, "stroke-width", "3");
      set_style(circle1, "opacity", "0.2");
      attr(circle2, "cx", "16");
      attr(circle2, "cy", "16");
      attr(circle2, "r", "10");
      attr(circle2, "class", "progress svelte-1u2i3kk");
      attr(circle2, "stroke-width", "3");
      set_style(circle2, "stroke-dashoffset", 62 - ctx[1] * 62);
      attr(svg, "width", "32");
      attr(svg, "height", "32");
      attr(svg, "viewBox", "0 0 32 32");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "class", "overscroll svelte-1u2i3kk");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, style);
      append(style, t);
      append(svg, circle0);
      append(svg, circle1);
      append(svg, circle2);
      ctx[2](circle2);
    },
    p(ctx2, [dirty]) {
      if (dirty & 2) {
        set_style(circle2, "stroke-dashoffset", 62 - ctx2[1] * 62);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
      ctx[2](null);
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  let $yw_overscroll_pct;
  component_subscribe($$self, yw_overscroll_pct, ($$value) => $$invalidate(1, $yw_overscroll_pct = $$value));
  let dm_progress;
  function circle2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      dm_progress = $$value;
      $$invalidate(0, dm_progress);
    });
  }
  return [dm_progress, $yw_overscroll_pct, circle2_binding];
}
class Overscroll extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$a, safe_not_equal, {});
  }
}
var Popup_svelte_svelte_type_style_lang = "";
function create_fragment$9(ctx) {
  let div;
  let section;
  let switch_instance;
  let current;
  let mounted;
  let dispose;
  var switch_value = ctx[0];
  function switch_props(ctx2) {
    return {};
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props());
  }
  return {
    c() {
      div = element("div");
      section = element("section");
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      attr(section, "class", "screen content svelte-rtd9ps");
      attr(div, "class", "popup svelte-rtd9ps");
      toggle_class(div, "showing", null !== ctx[0]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, section);
      if (switch_instance) {
        mount_component(switch_instance, section, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(section, "click", click_handler),
          listen(div, "click", ctx[1])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (switch_value !== (switch_value = ctx2[0])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, section, null);
        } else {
          switch_instance = null;
        }
      }
      if (dirty & 1) {
        toggle_class(div, "showing", null !== ctx2[0]);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (switch_instance)
        destroy_component(switch_instance);
      mounted = false;
      run_all(dispose);
    }
  };
}
const click_handler = (d_event) => d_event.stopPropagation();
function instance$7($$self, $$props, $$invalidate) {
  let $yw_popup;
  component_subscribe($$self, yw_popup, ($$value) => $$invalidate(0, $yw_popup = $$value));
  const click_handler_1 = () => set_store_value(yw_popup, $yw_popup = null, $yw_popup);
  return [$yw_popup, click_handler_1];
}
class Popup extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$9, safe_not_equal, {});
  }
}
var SX_ICON_EXPAND = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n	<path style="fill: var(--svg-color-fg,currentColor);" d="M12 16L18 10L16.59 8.59L12 13.17L7.41 8.59L6 10L12 16Z" />\n</svg>\n';
var SX_ICON_TOKENS = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n	<style type="text/css">\n		.s2r-tokens-fg {\n			fill: var(--svg-color-fg, currentColor);\n		}\n	</style>\n	<path class="s2r-tokens-fg" d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6ZM3 12a5.99 5.99 0 0 1 4-5.65V4.26C3.55 5.15 1 8.27 1 12c0 3.73 2.55 6.85 6 7.74v-2.09A5.99 5.99 0 0 1 3 12Z" />\n</svg>\n';
var SX_ICON_HISTORY = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n	<path style="fill: var(--svg-color-fg,currentColor);" d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18Zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8H12Z" />\n</svg>\n';
var SX_ICON_MENU = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n	<style type="text/css">\n		.s2r-menu-fg {\n			fill: var(--svg-color-fg, currentColor);\n		}\n	</style>\n	<path class="s2r-menu-fg" d="M4 19h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1Zm0-6h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1ZM3 6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1Z" />\n</svg>\n';
var Nav_svelte_svelte_type_style_lang = "";
function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[17] = list[i][0];
  child_ctx[18] = list[i][1];
  return child_ctx;
}
function create_else_block$1(ctx) {
  let li;
  let div0;
  let html_tag;
  let raw_value = ctx[18].svg + "";
  let t0;
  let span;
  let t1;
  let div1;
  let t2_value = ctx[18].label + "";
  let t2;
  let t3;
  let mounted;
  let dispose;
  function click_handler_1() {
    return ctx[9](ctx[17]);
  }
  return {
    c() {
      li = element("li");
      div0 = element("div");
      html_tag = new HtmlTag(false);
      t0 = space();
      span = element("span");
      t1 = space();
      div1 = element("div");
      t2 = text(t2_value);
      t3 = space();
      html_tag.a = t0;
      attr(span, "class", "notification svelte-1ylq4j5");
      toggle_class(span, "display_none", !ctx[1].includes(ctx[17]));
      attr(div0, "class", "icon svelte-1ylq4j5");
      attr(div1, "class", "label svelte-1ylq4j5");
      attr(li, "class", "button " + ctx[17] + " svelte-1ylq4j5");
      toggle_class(li, "active", ctx[0] === ctx[17]);
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, div0);
      html_tag.m(raw_value, div0);
      append(div0, t0);
      append(div0, span);
      append(li, t1);
      append(li, div1);
      append(div1, t2);
      append(li, t3);
      if (!mounted) {
        dispose = listen(li, "click", click_handler_1);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 18) {
        toggle_class(span, "display_none", !ctx[1].includes(ctx[17]));
      }
      if (dirty & 17) {
        toggle_class(li, "active", ctx[0] === ctx[17]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(li);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$3(ctx) {
  let li;
  let div0;
  let html_tag;
  let raw_value = ctx[18].svg + "";
  let t0;
  let span;
  let t1;
  let div1;
  let t2_value = ctx[18].label + "";
  let t2;
  let t3;
  return {
    c() {
      li = element("li");
      div0 = element("div");
      html_tag = new HtmlTag(false);
      t0 = space();
      span = element("span");
      t1 = space();
      div1 = element("div");
      t2 = text(t2_value);
      t3 = space();
      html_tag.a = t0;
      attr(span, "class", "notification svelte-1ylq4j5");
      toggle_class(span, "display_none", !ctx[1].includes(ctx[17]));
      attr(div0, "class", "icon svelte-1ylq4j5");
      attr(div1, "class", "label svelte-1ylq4j5");
      attr(li, "class", "button " + ctx[17] + " svelte-1ylq4j5");
      set_style(li, "opacity", "0.5");
      toggle_class(li, "active", ctx[0] === ctx[17]);
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, div0);
      html_tag.m(raw_value, div0);
      append(div0, t0);
      append(div0, span);
      append(li, t1);
      append(li, div1);
      append(div1, t2);
      append(li, t3);
    },
    p(ctx2, dirty) {
      if (dirty & 18) {
        toggle_class(span, "display_none", !ctx2[1].includes(ctx2[17]));
      }
      if (dirty & 17) {
        toggle_class(li, "active", ctx2[0] === ctx2[17]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_each_block$2(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (ctx2[18].disabled)
      return create_if_block$3;
    return create_else_block$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if_block.p(ctx2, dirty);
    },
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$8(ctx) {
  let nav;
  let div;
  let t;
  let ul;
  let mounted;
  let dispose;
  let each_value = ode(ctx[4]);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
  }
  return {
    c() {
      nav = element("nav");
      div = element("div");
      t = space();
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(div, "class", "collapse icon svelte-1ylq4j5");
      attr(ul, "class", "bar svelte-1ylq4j5");
      attr(nav, "class", "svelte-1ylq4j5");
      toggle_class(nav, "collapsed", ctx[2]);
      toggle_class(nav, "visible", ctx[3]);
    },
    m(target, anchor) {
      insert(target, nav, anchor);
      append(nav, div);
      div.innerHTML = SX_ICON_EXPAND;
      append(nav, t);
      append(nav, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
      if (!mounted) {
        dispose = listen(div, "click", ctx[8]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 83) {
        each_value = ode(ctx2[4]);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & 4) {
        toggle_class(nav, "collapsed", ctx2[2]);
      }
      if (dirty & 8) {
        toggle_class(nav, "visible", ctx2[3]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(nav);
      destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  let $yw_navigator;
  let $yw_thread;
  let $yw_page;
  let $yw_menu_expanded;
  let $yw_overlay_account;
  let $yw_overlay_network;
  let $yw_blur;
  let $yw_notifications;
  let $yw_nav_collapsed;
  let $yw_nav_visible;
  component_subscribe($$self, yw_navigator, ($$value) => $$invalidate(10, $yw_navigator = $$value));
  component_subscribe($$self, yw_thread, ($$value) => $$invalidate(11, $yw_thread = $$value));
  component_subscribe($$self, yw_page, ($$value) => $$invalidate(7, $yw_page = $$value));
  component_subscribe($$self, yw_menu_expanded, ($$value) => $$invalidate(12, $yw_menu_expanded = $$value));
  component_subscribe($$self, yw_overlay_account, ($$value) => $$invalidate(13, $yw_overlay_account = $$value));
  component_subscribe($$self, yw_overlay_network, ($$value) => $$invalidate(14, $yw_overlay_network = $$value));
  component_subscribe($$self, yw_blur, ($$value) => $$invalidate(15, $yw_blur = $$value));
  component_subscribe($$self, yw_notifications, ($$value) => $$invalidate(1, $yw_notifications = $$value));
  component_subscribe($$self, yw_nav_collapsed, ($$value) => $$invalidate(2, $yw_nav_collapsed = $$value));
  component_subscribe($$self, yw_nav_visible, ($$value) => $$invalidate(3, $yw_nav_visible = $$value));
  const H_BUTTONS = {
    [ThreadId.TOKENS]: { svg: SX_ICON_TOKENS, label: "Tokens" },
    [ThreadId.CONTACTS]: {
      svg: SX_ICON_CONTACTS,
      label: "Contacts",
      disabled: true
    },
    [ThreadId.HISTORY]: { svg: SX_ICON_HISTORY, label: "History" },
    menu: { svg: SX_ICON_MENU, label: "Menu" }
  };
  const HM_HOMESCREENS = new Map(oderac(H_THREADS, (si_thread, dc_creator) => [dc_creator, si_thread]));
  let si_thread_head = "";
  function toggle_collapsed() {
    set_store_value(yw_nav_collapsed, $yw_nav_collapsed = !$yw_nav_collapsed, $yw_nav_collapsed);
  }
  function nav_click(si_button) {
    set_store_value(yw_notifications, $yw_notifications = $yw_notifications.filter((si) => si_button !== si), $yw_notifications);
    if ($yw_blur) {
      set_store_value(yw_blur, $yw_blur = false, $yw_blur);
    }
    if ($yw_overlay_network) {
      set_store_value(yw_overlay_network, $yw_overlay_network = false, $yw_overlay_network);
    }
    if ($yw_overlay_account) {
      set_store_value(yw_overlay_account, $yw_overlay_account = false, $yw_overlay_account);
    }
    switch (si_button) {
      case "menu": {
        set_store_value(yw_menu_expanded, $yw_menu_expanded = true, $yw_menu_expanded);
        break;
      }
      case si_thread_head: {
        $yw_navigator.activePage.dom.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        break;
      }
      case $yw_thread.id: {
        const k_previous = $yw_page.peak();
        if (k_previous && HM_HOMESCREENS.get(k_previous.creator) === $yw_thread.id) {
          $yw_page.pop();
        } else {
          $yw_page.reset();
        }
        break;
      }
      default: {
        void $yw_navigator.activateThread(si_button);
        break;
      }
    }
  }
  const click_handler2 = () => toggle_collapsed();
  const click_handler_1 = (si_button) => nav_click(si_button);
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 128) {
      $$invalidate(0, si_thread_head = $yw_page ? HM_HOMESCREENS.get($yw_page.creator) || "" : "");
    }
  };
  return [
    si_thread_head,
    $yw_notifications,
    $yw_nav_collapsed,
    $yw_nav_visible,
    H_BUTTONS,
    toggle_collapsed,
    nav_click,
    $yw_page,
    click_handler2,
    click_handler_1
  ];
}
class Nav extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$8, safe_not_equal, {});
  }
}
function isArray(value) {
  return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
}
const INFINITY = 1 / 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  let result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number";
}
function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
}
function isObject(value) {
  return typeof value === "object";
}
function isObjectLike(value) {
  return isObject(value) && value !== null;
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isBlank(value) {
  return !value.trim().length;
}
function getTag(value) {
  return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
}
const EXTENDED_SEARCH_UNAVAILABLE = "Extended search is not available";
const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
const PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
const INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
const hasOwn = Object.prototype.hasOwnProperty;
class KeyStore {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};
    let totalWeight = 0;
    keys.forEach((key) => {
      let obj = createKey(key);
      totalWeight += obj.weight;
      this._keys.push(obj);
      this._keyMap[obj.id] = obj;
      totalWeight += obj.weight;
    });
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function createKey(key) {
  let path = null;
  let id2 = null;
  let src = null;
  let weight = 1;
  let getFn = null;
  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id2 = createKeyId(key);
  } else {
    if (!hasOwn.call(key, "name")) {
      throw new Error(MISSING_KEY_PROPERTY("name"));
    }
    const name = key.name;
    src = name;
    if (hasOwn.call(key, "weight")) {
      weight = key.weight;
      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
      }
    }
    path = createKeyPath(name);
    id2 = createKeyId(name);
    getFn = key.getFn;
  }
  return { path, id: id2, weight, src, getFn };
}
function createKeyPath(key) {
  return isArray(key) ? key : key.split(".");
}
function createKeyId(key) {
  return isArray(key) ? key.join(".") : key;
}
function get(obj, path) {
  let list = [];
  let arr = false;
  const deepGet = (obj2, path2, index) => {
    if (!isDefined(obj2)) {
      return;
    }
    if (!path2[index]) {
      list.push(obj2);
    } else {
      let key = path2[index];
      const value = obj2[key];
      if (!isDefined(value)) {
        return;
      }
      if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path2, index + 1);
        }
      } else if (path2.length) {
        deepGet(value, path2, index + 1);
      }
    }
  };
  deepGet(obj, isString(path) ? path.split(".") : path, 0);
  return arr ? list : list[0];
}
const MatchOptions = {
  includeMatches: false,
  findAllMatches: false,
  minMatchCharLength: 1
};
const BasicOptions = {
  isCaseSensitive: false,
  includeScore: false,
  keys: [],
  shouldSort: true,
  sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
};
const FuzzyOptions = {
  location: 0,
  threshold: 0.6,
  distance: 100
};
const AdvancedOptions = {
  useExtendedSearch: false,
  getFn: get,
  ignoreLocation: false,
  ignoreFieldNorm: false,
  fieldNormWeight: 1
};
var Config = {
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};
const SPACE = /[^ ]+/g;
function norm(weight = 1, mantissa = 3) {
  const cache = /* @__PURE__ */ new Map();
  const m = Math.pow(10, mantissa);
  return {
    get(value) {
      const numTokens = value.match(SPACE).length;
      if (cache.has(numTokens)) {
        return cache.get(numTokens);
      }
      const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
      const n = parseFloat(Math.round(norm2 * m) / m);
      cache.set(numTokens, n);
      return n;
    },
    clear() {
      cache.clear();
    }
  };
}
class FuseIndex {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;
    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return;
    }
    this.isCreated = true;
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }
    this.norm.clear();
  }
  add(doc) {
    const idx = this.size();
    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  removeAt(idx) {
    this.records.splice(idx, 1);
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]];
  }
  size() {
    return this.records.length;
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return;
    }
    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };
    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = { i: docIndex, $: {} };
    this.keys.forEach((key, keyIndex) => {
      let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
      if (!isDefined(value)) {
        return;
      }
      if (isArray(value)) {
        let subRecords = [];
        const stack = [{ nestedArrIndex: -1, value }];
        while (stack.length) {
          const { nestedArrIndex, value: value2 } = stack.pop();
          if (!isDefined(value2)) {
            continue;
          }
          if (isString(value2) && !isBlank(value2)) {
            let subRecord = {
              v: value2,
              i: nestedArrIndex,
              n: this.norm.get(value2)
            };
            subRecords.push(subRecord);
          } else if (isArray(value2)) {
            value2.forEach((item, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item
              });
            });
          } else
            ;
        }
        record.$[keyIndex] = subRecords;
      } else if (isString(value) && !isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };
        record.$[keyIndex] = subRecord;
      }
    });
    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex;
}
function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex;
}
function computeScore$1(pattern, {
  errors = 0,
  currentLocation = 0,
  expectedLocation = 0,
  distance = Config.distance,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  const accuracy = errors / pattern.length;
  if (ignoreLocation) {
    return accuracy;
  }
  const proximity = Math.abs(expectedLocation - currentLocation);
  if (!distance) {
    return proximity ? 1 : accuracy;
  }
  return accuracy + proximity / distance;
}
function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;
  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }
  return indices;
}
const MAX_BITS = 32;
function search(text2, pattern, patternAlphabet, {
  location = Config.location,
  distance = Config.distance,
  threshold = Config.threshold,
  findAllMatches = Config.findAllMatches,
  minMatchCharLength = Config.minMatchCharLength,
  includeMatches = Config.includeMatches,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
  }
  const patternLen = pattern.length;
  const textLen = text2.length;
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  let currentThreshold = threshold;
  let bestLocation = expectedLocation;
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  const matchMask = computeMatches ? Array(textLen) : [];
  let index;
  while ((index = text2.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore$1(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });
    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;
    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }
  bestLocation = -1;
  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;
  const mask = 1 << patternLen - 1;
  for (let i = 0; i < patternLen; i += 1) {
    let binMin = 0;
    let binMid = binMax;
    while (binMin < binMid) {
      const score2 = computeScore$1(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });
      if (score2 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }
      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }
    binMax = binMid;
    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
    let bitArr = Array(finish + 2);
    bitArr[finish + 1] = (1 << i) - 1;
    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text2.charAt(currentLocation)];
      if (computeMatches) {
        matchMask[currentLocation] = +!!charMatch;
      }
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
      if (i) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }
      if (bitArr[j] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (finalScore <= currentThreshold) {
          currentThreshold = finalScore;
          bestLocation = currentLocation;
          if (bestLocation <= expectedLocation) {
            break;
          }
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }
    const score = computeScore$1(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });
    if (score > currentThreshold) {
      break;
    }
    lastBitArr = bitArr;
  }
  const result = {
    isMatch: bestLocation >= 0,
    score: Math.max(1e-3, finalScore)
  };
  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }
  return result;
}
function createPatternAlphabet(pattern) {
  let mask = {};
  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | 1 << len - i - 1;
  }
  return mask;
}
class BitapSearch {
  constructor(pattern, {
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    };
    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.chunks = [];
    if (!this.pattern.length) {
      return;
    }
    const addChunk = (pattern2, startIndex) => {
      this.chunks.push({
        pattern: pattern2,
        alphabet: createPatternAlphabet(pattern2),
        startIndex
      });
    };
    const len = this.pattern.length;
    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;
      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }
      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }
  searchIn(text2) {
    const { isCaseSensitive, includeMatches } = this.options;
    if (!isCaseSensitive) {
      text2 = text2.toLowerCase();
    }
    if (this.pattern === text2) {
      let result2 = {
        isMatch: true,
        score: 0
      };
      if (includeMatches) {
        result2.indices = [[0, text2.length - 1]];
      }
      return result2;
    }
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;
    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;
    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
      const { isMatch, score, indices } = search(text2, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });
      if (isMatch) {
        hasMatches = true;
      }
      totalScore += score;
      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });
    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };
    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }
    return result;
  }
}
class BaseMatch {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex);
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex);
  }
  search() {
  }
}
function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null;
}
class ExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(text2) {
    const isMatch = text2 === this.pattern;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class InverseExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(text2) {
    const index = text2.indexOf(this.pattern);
    const isMatch = index === -1;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text2.length - 1]
    };
  }
}
class PrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(text2) {
    const isMatch = text2.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class InversePrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(text2) {
    const isMatch = !text2.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text2.length - 1]
    };
  }
}
class SuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(text2) {
    const isMatch = text2.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text2.length - this.pattern.length, text2.length - 1]
    };
  }
}
class InverseSuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(text2) {
    const isMatch = !text2.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text2.length - 1]
    };
  }
}
class FuzzyMatch extends BaseMatch {
  constructor(pattern, {
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(text2) {
    return this._bitapSearch.searchIn(text2);
  }
}
class IncludeMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(text2) {
    let location = 0;
    let index;
    const indices = [];
    const patternLen = this.pattern.length;
    while ((index = text2.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }
    const isMatch = !!indices.length;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    };
  }
}
const searchers = [
  ExactMatch,
  IncludeMatch,
  PrefixExactMatch,
  InversePrefixExactMatch,
  InverseSuffixExactMatch,
  SuffixExactMatch,
  InverseExactMatch,
  FuzzyMatch
];
const searchersLen = searchers.length;
const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = "|";
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }
      if (found) {
        continue;
      }
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break;
        }
      }
    }
    return results;
  });
}
const MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
class ExtendedSearch {
  constructor(pattern, {
    isCaseSensitive = Config.isCaseSensitive,
    includeMatches = Config.includeMatches,
    minMatchCharLength = Config.minMatchCharLength,
    ignoreLocation = Config.ignoreLocation,
    findAllMatches = Config.findAllMatches,
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance
  } = {}) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };
    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.query = parseQuery(this.pattern, this.options);
  }
  static condition(_, options) {
    return options.useExtendedSearch;
  }
  searchIn(text2) {
    const query = this.query;
    if (!query) {
      return {
        isMatch: false,
        score: 1
      };
    }
    const { includeMatches, isCaseSensitive } = this.options;
    text2 = isCaseSensitive ? text2 : text2.toLowerCase();
    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers2 = query[i];
      allIndices.length = 0;
      numMatches = 0;
      for (let j = 0, pLen = searchers2.length; j < pLen; j += 1) {
        const searcher = searchers2[j];
        const { isMatch, indices, score } = searcher.search(text2);
        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break;
        }
      }
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };
        if (includeMatches) {
          result.indices = allIndices;
        }
        return result;
      }
    }
    return {
      isMatch: false,
      score: 1
    };
  }
}
const registeredSearchers = [];
function register(...args) {
  registeredSearchers.push(...args);
}
function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options);
    }
  }
  return new BitapSearch(pattern, options);
}
const LogicalOperator = {
  AND: "$and",
  OR: "$or"
};
const KeyType = {
  PATH: "$path",
  PATTERN: "$val"
};
const isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
const isPath = (query) => !!query[KeyType.PATH];
const isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
const convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});
function parse(query, options, { auto = true } = {}) {
  const next = (query2) => {
    let keys = Object.keys(query2);
    const isQueryPath = isPath(query2);
    if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
      return next(convertToExplicit(query2));
    }
    if (isLeaf(query2)) {
      const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
      const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
      }
      const obj = {
        keyId: createKeyId(key),
        pattern
      };
      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }
      return obj;
    }
    let node = {
      children: [],
      operator: keys[0]
    };
    keys.forEach((key) => {
      const value = query2[key];
      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });
    return node;
  };
  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }
  return next(query);
}
function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
  results.forEach((result) => {
    let totalScore = 1;
    result.matches.forEach(({ key, norm: norm2, score }) => {
      const weight = key ? key.weight : null;
      totalScore *= Math.pow(
        score === 0 && weight ? Number.EPSILON : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm2)
      );
    });
    result.score = totalScore;
  });
}
function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];
  if (!isDefined(matches)) {
    return;
  }
  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return;
    }
    const { indices, value } = match;
    let obj = {
      indices,
      value
    };
    if (match.key) {
      obj.key = match.key.src;
    }
    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }
    data.matches.push(obj);
  });
}
function transformScore(result, data) {
  data.score = result.score;
}
function format(results, docs, {
  includeMatches = Config.includeMatches,
  includeScore = Config.includeScore
} = {}) {
  const transformers = [];
  if (includeMatches)
    transformers.push(transformMatches);
  if (includeScore)
    transformers.push(transformScore);
  return results.map((result) => {
    const { idx } = result;
    const data = {
      item: docs[idx],
      refIndex: idx
    };
    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }
    return data;
  });
}
class Fuse {
  constructor(docs, options = {}, index) {
    this.options = { ...Config, ...options };
    if (this.options.useExtendedSearch && false) {
      throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
    }
    this._keyStore = new KeyStore(this.options.keys);
    this.setCollection(docs, index);
  }
  setCollection(docs, index) {
    this._docs = docs;
    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE);
    }
    this._myIndex = index || createIndex(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(doc) {
    if (!isDefined(doc)) {
      return;
    }
    this._docs.push(doc);
    this._myIndex.add(doc);
  }
  remove(predicate = () => false) {
    const results = [];
    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];
      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;
        results.push(doc);
      }
    }
    return results;
  }
  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }
  getIndex() {
    return this._myIndex;
  }
  search(query, { limit = -1 } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;
    let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
    computeScore(results, { ignoreFieldNorm });
    if (shouldSort) {
      results.sort(sortFn);
    }
    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }
    return format(results, this._docs, {
      includeMatches,
      includeScore
    });
  }
  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const { records } = this._myIndex;
    const results = [];
    records.forEach(({ v: text2, i: idx, n: norm2 }) => {
      if (!isDefined(text2)) {
        return;
      }
      const { isMatch, score, indices } = searcher.searchIn(text2);
      if (isMatch) {
        results.push({
          item: text2,
          idx,
          matches: [{ score, value: text2, norm: norm2, indices }]
        });
      }
    });
    return results;
  }
  _searchLogical(query) {
    const expression = parse(query, this.options);
    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const { keyId, searcher } = node;
        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });
        if (matches && matches.length) {
          return [
            {
              idx,
              item,
              matches
            }
          ];
        }
        return [];
      }
      const res = [];
      for (let i = 0, len = node.children.length; i < len; i += 1) {
        const child = node.children[i];
        const result = evaluate(child, item, idx);
        if (result.length) {
          res.push(...result);
        } else if (node.operator === LogicalOperator.AND) {
          return [];
        }
      }
      return res;
    };
    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];
    records.forEach(({ $: item, i: idx }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);
        if (expResults.length) {
          if (!resultMap[idx]) {
            resultMap[idx] = { idx, item, matches: [] };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({ matches }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });
    return results;
  }
  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const { keys, records } = this._myIndex;
    const results = [];
    records.forEach(({ $: item, i: idx }) => {
      if (!isDefined(item)) {
        return;
      }
      let matches = [];
      keys.forEach((key, keyIndex) => {
        matches.push(
          ...this._findMatches({
            key,
            value: item[keyIndex],
            searcher
          })
        );
      });
      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });
    return results;
  }
  _findMatches({ key, value, searcher }) {
    if (!isDefined(value)) {
      return [];
    }
    let matches = [];
    if (isArray(value)) {
      value.forEach(({ v: text2, i: idx, n: norm2 }) => {
        if (!isDefined(text2)) {
          return;
        }
        const { isMatch, score, indices } = searcher.searchIn(text2);
        if (isMatch) {
          matches.push({
            score,
            key,
            value: text2,
            idx,
            norm: norm2,
            indices
          });
        }
      });
    } else {
      const { v: text2, n: norm2 } = value;
      const { isMatch, score, indices } = searcher.searchIn(text2);
      if (isMatch) {
        matches.push({ score, key, value: text2, norm: norm2, indices });
      }
    }
    return matches;
  }
}
Fuse.version = "6.6.2";
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;
{
  Fuse.parseQuery = parse;
}
{
  register(ExtendedSearch);
}
var Search_svelte_svelte_type_style_lang = "";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}
function create_each_block$1(ctx) {
  let genericrow;
  let current;
  genericrow = new GenericRow({ props: { item: ctx[9] } });
  return {
    c() {
      create_component(genericrow.$$.fragment);
    },
    m(target, anchor) {
      mount_component(genericrow, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(genericrow.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(genericrow.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(genericrow, detaching);
    }
  };
}
function create_default_slot$2(ctx) {
  let header;
  let t0;
  let p2;
  let t3;
  let div;
  let each_1_anchor;
  let current;
  const header_spread_levels = [
    { network: true },
    { account: true },
    { search: true },
    { isSearchScreen: true },
    ctx[2] || {}
  ];
  let header_props = {};
  for (let i = 0; i < header_spread_levels.length; i += 1) {
    header_props = assign(header_props, header_spread_levels[i]);
  }
  header = new Header({ props: header_props });
  header.$on("search", ctx[5]);
  let each_value = ctx[3];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      create_component(header.$$.fragment);
      t0 = space();
      p2 = element("p");
      p2.innerHTML = `<span style="color:var(--theme-color-caution);">Disclaimer:</span>
			This temporary search interface does not represent the look and function of the actual search interface currently under development for beta.`;
      t3 = space();
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
      set_style(p2, "font-size", "12px");
      attr(div, "class", "results no-margin");
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert(target, t0, anchor);
      insert(target, p2, anchor);
      insert(target, t3, anchor);
      insert(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      append(div, each_1_anchor);
      ctx[6](div);
      current = true;
    },
    p(ctx2, dirty) {
      const header_changes = dirty & 4 ? get_spread_update(header_spread_levels, [
        header_spread_levels[0],
        header_spread_levels[1],
        header_spread_levels[2],
        header_spread_levels[3],
        get_spread_object(ctx2[2] || {})
      ]) : {};
      header.$set(header_changes);
      if (dirty & 8) {
        each_value = ctx2[3];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(p2);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
      ctx[6](null);
    }
  };
}
function create_fragment$7(ctx) {
  let div;
  let screen;
  let current;
  screen = new Screen({
    props: {
      debug: "Search",
      root: true,
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      create_component(screen.$$.fragment);
      attr(div, "class", "search svelte-5f3tva");
      toggle_class(div, "display_none", !ctx[0]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(screen, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const screen_changes = {};
      if (dirty & 4102) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
      if (dirty & 1) {
        toggle_class(div, "display_none", !ctx2[0]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(screen);
    }
  };
}
var ClassType;
(function(ClassType2) {
  ClassType2["UNKNOWN"] = "unknown";
  ClassType2["FAMILY"] = "family";
  ClassType2["CHAIN"] = "chain";
  ClassType2["NETWORK"] = "network";
  ClassType2["ACCOUNT"] = "account";
  ClassType2["CONTACT"] = "contact";
  ClassType2["CONTRACT"] = "contract";
  ClassType2["TOKEN"] = "token";
  ClassType2["HOLDING"] = "holding";
  ClassType2["APP"] = "app";
  ClassType2["COIN"] = "coin";
  ClassType2["TAG"] = "tag";
  ClassType2["ICON"] = "icon";
  ClassType2["IBCT"] = "ibct";
  ClassType2["SNIP721"] = "snip721";
  ClassType2["TXN"] = "txn";
  ClassType2["OTHER"] = "other";
})(ClassType || (ClassType = {}));
function instance$5($$self, $$props, $$invalidate) {
  let $yw_search;
  let $yw_header_props;
  component_subscribe($$self, yw_search, ($$value) => $$invalidate(0, $yw_search = $$value));
  component_subscribe($$self, yw_header_props, ($$value) => $$invalidate(2, $yw_header_props = $$value));
  let dm_results;
  const a_results = [];
  let a_fuses = [];
  const fuzey = (a_items, a_keys) => new Fuse(
    a_items,
    {
      includeScore: true,
      includeMatches: true,
      keys: ["label", ...a_keys.map((s) => `details.${s}`)]
    }
  );
  (async () => {
    const ks_chains = await Chains.read();
    a_fuses = [
      (() => fuzey(
        ks_chains.entries().map(([p_chain, g_chain]) => ({
          class: ClassType.CHAIN,
          name: g_chain.name,
          resourcePath: p_chain,
          resource: g_chain,
          details: { name: g_chain.name, id: g_chain.id }
        })),
        ["id"]
      ))(),
      (() => fuzey(
        ks_chains.entries().flatMap(([p_chain, g_chain]) => oderac(g_chain.coins, (si_coin, g_coin) => ({
          class: ClassType.COIN,
          name: proper(g_coin.extra?.coingecko_id || "Unknown"),
          postname: si_coin,
          resourcePath: `${p_chain}/coin.${si_coin}`,
          resource: {
            name: proper(g_coin.extra?.coingecko_id || "Unknown"),
            pfp: g_chain.pfp,
            ...g_coin
          },
          details: {
            symbol: si_coin,
            denom: g_coin.denom,
            coingecko: g_coin.extra?.coingecko_id || ""
          }
        }))),
        ["symbol", "denom"]
      ))(),
      ...await Promise.all([
        (async () => {
          const ks_accounts = await Accounts.read();
          return fuzey(
            ks_accounts.entries().map(([p_account, g_account]) => {
              const a_addrs = [];
              const as_addrs = /* @__PURE__ */ new Set();
              for (const [, g_chain] of ks_chains) {
                as_addrs.add(Chains.addressFor(g_account.pubkey, g_chain));
              }
              a_addrs.push(...as_addrs);
              return {
                class: ClassType.ACCOUNT,
                name: g_account.name,
                resourcePath: p_account,
                resource: g_account,
                details: { name: g_account.name, addresses: a_addrs }
              };
            }),
            ["addresses"]
          );
        })(),
        (async () => {
          const ks_agents = await Agents.read();
          return fuzey(
            [...ks_agents.contacts()].map(([p_contact, g_contact]) => ({
              class: ClassType.CONTACT,
              name: g_contact.name,
              resourcePath: p_contact,
              resource: g_contact,
              details: {
                name: g_contact.name,
                notes: g_contact.notes,
                addresses: [...ks_chains.inFamily(g_contact.family)].map(([, g_chain]) => Chains.bech32(g_contact.address, g_chain))
              }
            })),
            ["notes"]
          );
        })(),
        (async () => {
          const ks_apps = await Apps.read();
          return fuzey(
            ks_apps.entries().map(([p_app, g_app]) => ({
              class: ClassType.APP,
              name: g_app.host,
              resourcePath: p_app,
              resource: g_app,
              details: { host: g_app.host }
            })),
            []
          );
        })(),
        (async () => {
          const a_tokens = [];
          for (const [, g_chain] of ks_chains.entries()) {
            for (const [si_spec, h_tokens] of ode(await Entities.readFungibleTokens(g_chain))) {
              for (const [p_token, g_token2] of ode(h_tokens)) {
                a_tokens.push({
                  class: ClassType.TOKEN,
                  name: g_token2.name,
                  resourcePath: p_token,
                  resource: g_token2,
                  details: {
                    spec: si_spec,
                    name: g_token2.name,
                    symbol: g_token2.symbol,
                    bech32: g_token2.bech32,
                    codehash: g_token2.hash
                  }
                });
              }
            }
          }
          return fuzey(a_tokens, ["spec", "symbol", "bech32", "codehash"]);
        })()
      ])
    ];
  })();
  function search2(s_search) {
    const a_groups = [];
    const a_hits = [];
    let c_total = 0;
    for (const y_fuse of a_fuses) {
      const a_hits_local = y_fuse.search(s_search);
      if (a_hits_local.length) {
        c_total += a_hits.length;
        a_hits.push(...a_hits_local);
        a_groups.push({
          top: a_hits_local[0].score,
          hits: a_hits_local
        });
      }
    }
    a_hits.sort((g_a, g_b) => g_b.score - g_a.score);
    $$invalidate(1, dm_results.innerHTML = "", dm_results);
    console.log(a_hits);
    for (const g_hit of a_hits) {
      new Row({
        target: dm_results,
        props: { ...g_hit.item, pfpDim: 32 }
      });
    }
  }
  const search_handler = (d_event) => search2(d_event.detail);
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      dm_results = $$value;
      $$invalidate(1, dm_results);
    });
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      {
        if ($yw_search) {
          search2($yw_search);
        }
      }
    }
  };
  return [
    $yw_search,
    dm_results,
    $yw_header_props,
    a_results,
    search2,
    search_handler,
    div_binding
  ];
}
class Search extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$7, safe_not_equal, {});
  }
}
var Progress_svelte_svelte_type_style_lang = "";
function create_fragment$6(ctx) {
  let div1;
  let div0;
  let t0;
  let div2;
  let t1;
  let t2_value = (ctx[0][0] || ctx[0][1]) + "";
  let t2;
  let t3;
  let t4_value = ctx[0][1] + "";
  let t4;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      t0 = space();
      div2 = element("div");
      t1 = text("Step ");
      t2 = text(t2_value);
      t3 = text(" of ");
      t4 = text(t4_value);
      attr(div0, "class", "bar svelte-1hwu1hf");
      set_style(div0, "width", ctx[1] + "%");
      attr(div1, "class", "progress svelte-1hwu1hf");
      toggle_class(div1, "visible", ctx[0][0] > 0);
      attr(div2, "class", "step svelte-1hwu1hf");
      toggle_class(div2, "visible", ctx[0][0] > 0);
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      insert(target, t0, anchor);
      insert(target, div2, anchor);
      append(div2, t1);
      append(div2, t2);
      append(div2, t3);
      append(div2, t4);
    },
    p(ctx2, [dirty]) {
      if (dirty & 2) {
        set_style(div0, "width", ctx2[1] + "%");
      }
      if (dirty & 1) {
        toggle_class(div1, "visible", ctx2[0][0] > 0);
      }
      if (dirty & 1 && t2_value !== (t2_value = (ctx2[0][0] || ctx2[0][1]) + ""))
        set_data(t2, t2_value);
      if (dirty & 1 && t4_value !== (t4_value = ctx2[0][1] + ""))
        set_data(t4, t4_value);
      if (dirty & 1) {
        toggle_class(div2, "visible", ctx2[0][0] > 0);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div2);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let x_width_pct_bar;
  let $yw_progress;
  component_subscribe($$self, yw_progress, ($$value) => $$invalidate(0, $yw_progress = $$value));
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $$invalidate(1, x_width_pct_bar = $yw_progress[0] / $yw_progress[1] * 100);
    }
  };
  return [$yw_progress, x_width_pct_bar];
}
class Progress extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$6, safe_not_equal, {});
  }
}
var SX_ICON_CHAINS = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n	<path style="fill: var(--svg-color-fg, currentColor);" d="m18 16 4-4-4-4v3h-5.06A8.974 8.974 0 0 0 8 3.95 3.005 3.005 0 0 0 5 1C3.34 1 2 2.34 2 4s1.34 3 3 3c.95 0 1.78-.45 2.33-1.14C9.23 6.9 10.6 8.77 10.92 11h-3.1C7.4 9.84 6.3 9 5 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c1.3 0 2.4-.84 2.82-2h3.1c-.32 2.23-1.69 4.1-3.58 5.14C6.78 17.45 5.95 17 5 17c-1.66 0-3 1.34-3 3s1.34 3 3 3a2.99 2.99 0 0 0 2.99-2.95A8.974 8.974 0 0 0 12.93 13H18v3z"/>\n</svg>';
var SX_ICON_ACCOUNTS = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n	<path style="fill: var(--svg-color-fg, currentColor);" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.95 7.95 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>\n</svg>';
var SX_ICON_LOGOUT = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n	<path style="fill: var(--svg-color-fg, currentColor);" d="M18 4v16H6V4h12m0-2H6c-1.1 0-2 .9-2 2v18h16V4c0-1.1-.9-2-2-2zm-2.5 8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S17 12.83 17 12s-.67-1.5-1.5-1.5z"/>\n</svg>';
var SideMenu_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  return child_ctx;
}
function create_each_block_1(ctx) {
  let li;
  let span0;
  let raw_value = ctx[10].icon + "";
  let t0;
  let span1;
  let t1_value = ctx[10].label + "";
  let t1;
  let t2;
  let mounted;
  let dispose;
  function click_handler_2() {
    return ctx[5](ctx[10]);
  }
  return {
    c() {
      li = element("li");
      span0 = element("span");
      t0 = space();
      span1 = element("span");
      t1 = text(t1_value);
      t2 = space();
      attr(span0, "class", "icon svelte-fhv297");
      attr(span1, "class", "text svelte-fhv297");
      attr(li, "class", "svelte-fhv297");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, span0);
      span0.innerHTML = raw_value;
      append(li, t0);
      append(li, span1);
      append(span1, t1);
      append(li, t2);
      if (!mounted) {
        dispose = listen(li, "click", click_handler_2);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      mounted = false;
      dispose();
    }
  };
}
function create_each_block(ctx) {
  let li;
  let span0;
  let raw_value = ctx[10].icon + "";
  let t0;
  let span1;
  let t1_value = ctx[10].label + "";
  let t1;
  let t2;
  let mounted;
  let dispose;
  function click_handler_3() {
    return ctx[6](ctx[10]);
  }
  return {
    c() {
      li = element("li");
      span0 = element("span");
      t0 = space();
      span1 = element("span");
      t1 = text(t1_value);
      t2 = space();
      attr(span0, "class", "icon svelte-fhv297");
      attr(span1, "class", "text svelte-fhv297");
      attr(li, "class", " svelte-fhv297");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, span0);
      span0.innerHTML = raw_value;
      append(li, t0);
      append(li, span1);
      append(span1, t1);
      append(li, t2);
      if (!mounted) {
        dispose = listen(li, "click", click_handler_3);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$5(ctx) {
  let div6;
  let div0;
  let t0;
  let div5;
  let div1;
  let t1;
  let div4;
  let div2;
  let ul0;
  let t2;
  let hr;
  let t3;
  let div3;
  let ul1;
  let mounted;
  let dispose;
  let each_value_1 = ctx[2];
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let each_value = ctx[1];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div6 = element("div");
      div0 = element("div");
      t0 = space();
      div5 = element("div");
      div1 = element("div");
      t1 = space();
      div4 = element("div");
      div2 = element("div");
      ul0 = element("ul");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t2 = space();
      hr = element("hr");
      t3 = space();
      div3 = element("div");
      ul1 = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(div0, "class", "backdrop svelte-fhv297");
      attr(div1, "class", "close icon svelte-fhv297");
      attr(ul0, "class", "session svelte-fhv297");
      attr(hr, "class", "svelte-fhv297");
      attr(div2, "class", "top svelte-fhv297");
      attr(ul1, "class", "items svelte-fhv297");
      attr(div3, "class", "main svelte-fhv297");
      attr(div4, "class", "menu svelte-fhv297");
      attr(div5, "class", "bar svelte-fhv297");
      attr(div6, "class", "side-menu svelte-fhv297");
      toggle_class(div6, "collapsed", !ctx[0]);
    },
    m(target, anchor) {
      insert(target, div6, anchor);
      append(div6, div0);
      append(div6, t0);
      append(div6, div5);
      append(div5, div1);
      div1.innerHTML = SX_ICON_CLOSE;
      append(div5, t1);
      append(div5, div4);
      append(div4, div2);
      append(div2, ul0);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(ul0, null);
      }
      append(div2, t2);
      append(div2, hr);
      append(div4, t3);
      append(div4, div3);
      append(div3, ul1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul1, null);
      }
      if (!mounted) {
        dispose = [
          listen(div0, "click", ctx[3]),
          listen(div1, "click", ctx[4])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 4) {
        each_value_1 = ctx2[2];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(ul0, null);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_1.length;
      }
      if (dirty & 2) {
        each_value = ctx2[1];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul1, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & 1) {
        toggle_class(div6, "collapsed", !ctx2[0]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div6);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let $yw_navigator;
  let $yw_menu_expanded;
  component_subscribe($$self, yw_navigator, ($$value) => $$invalidate(7, $yw_navigator = $$value));
  component_subscribe($$self, yw_menu_expanded, ($$value) => $$invalidate(0, $yw_menu_expanded = $$value));
  getContext("page");
  function activate(si_thread) {
    set_store_value(yw_menu_expanded, $yw_menu_expanded = false, $yw_menu_expanded);
    if (si_thread === $yw_navigator.activeThread.id) {
      $yw_navigator.activeThread.reset();
    } else {
      void $yw_navigator.activateThread(si_thread);
    }
  }
  const A_ITEMS = [
    {
      label: "Accounts",
      icon: SX_ICON_ACCOUNTS,
      click() {
        activate(ThreadId.ACCOUNTS);
      }
    },
    {
      label: "Networks",
      icon: SX_ICON_CHAINS,
      click() {
        activate(ThreadId.NETWORKS);
      }
    }
  ];
  const A_SESSION_ITEMS = [
    {
      label: "Log out",
      icon: SX_ICON_LOGOUT,
      async click() {
        await logout();
        globalThis.close();
      }
    }
  ];
  const click_handler2 = () => set_store_value(yw_menu_expanded, $yw_menu_expanded = false, $yw_menu_expanded);
  const click_handler_1 = () => set_store_value(yw_menu_expanded, $yw_menu_expanded = false, $yw_menu_expanded);
  const click_handler_2 = (g_item) => g_item.click();
  const click_handler_3 = (g_item) => g_item.click();
  return [
    $yw_menu_expanded,
    A_ITEMS,
    A_SESSION_ITEMS,
    click_handler2,
    click_handler_1,
    click_handler_2,
    click_handler_3
  ];
}
class SideMenu extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$5, safe_not_equal, {});
  }
}
var VendorMenu_svelte_svelte_type_style_lang = "";
function create_else_block(ctx) {
  let t;
  return {
    c() {
      t = text("[...]");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block$2(ctx) {
  let t0_value = (ctx[1] / 1e3).toFixed(2) + "";
  let t0;
  let t1;
  return {
    c() {
      t0 = text(t0_value);
      t1 = text(" seconds");
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, t1, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 2 && t0_value !== (t0_value = (ctx2[1] / 1e3).toFixed(2) + ""))
        set_data(t0, t0_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
    }
  };
}
function create_fragment$4(ctx) {
  let div26;
  let div0;
  let t0;
  let div25;
  let div1;
  let t1;
  let div24;
  let div23;
  let div4;
  let div2;
  let t2;
  let div3;
  let t5;
  let div7;
  let div5;
  let t7;
  let div6;
  let t8;
  let t9;
  let div10;
  let div8;
  let t11;
  let div9;
  let span0;
  let t12;
  let t13;
  let div13;
  let div11;
  let t15;
  let div12;
  let span1;
  let t16;
  let t17;
  let div16;
  let div14;
  let t19;
  let div15;
  let t20;
  let t21;
  let t22;
  let div19;
  let div17;
  let t24;
  let div18;
  let t25;
  let div22;
  let div20;
  let t27;
  let div21;
  let t28;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (ctx2[1])
      return create_if_block$2;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div26 = element("div");
      div0 = element("div");
      t0 = space();
      div25 = element("div");
      div1 = element("div");
      t1 = space();
      div24 = element("div");
      div23 = element("div");
      div4 = element("div");
      div2 = element("div");
      t2 = space();
      div3 = element("div");
      div3.textContent = `v${SI_VERSION}`;
      t5 = space();
      div7 = element("div");
      div5 = element("div");
      div5.textContent = "Network Status";
      t7 = space();
      div6 = element("div");
      t8 = text(ctx[2]);
      t9 = space();
      div10 = element("div");
      div8 = element("div");
      div8.textContent = "Chain Id";
      t11 = space();
      div9 = element("div");
      span0 = element("span");
      t12 = text(ctx[4]);
      t13 = space();
      div13 = element("div");
      div11 = element("div");
      div11.textContent = "Current Provider";
      t15 = space();
      div12 = element("div");
      span1 = element("span");
      t16 = text(ctx[3]);
      t17 = space();
      div16 = element("div");
      div14 = element("div");
      div14.textContent = "Current Block Height";
      t19 = space();
      div15 = element("div");
      t20 = text("#");
      t21 = text(ctx[0]);
      t22 = space();
      div19 = element("div");
      div17 = element("div");
      div17.textContent = "Average Block Time";
      t24 = space();
      div18 = element("div");
      if_block.c();
      t25 = space();
      div22 = element("div");
      div20 = element("div");
      div20.textContent = "Last Block Seen";
      t27 = space();
      div21 = element("div");
      t28 = text(ctx[5]);
      attr(div0, "class", "backdrop svelte-1y4wjl5");
      attr(div1, "class", "close icon svelte-1y4wjl5");
      attr(div4, "class", "app svelte-1y4wjl5");
      attr(div5, "class", "name svelte-1y4wjl5");
      attr(div6, "class", "value svelte-1y4wjl5");
      attr(div7, "class", "info svelte-1y4wjl5");
      attr(div8, "class", "name svelte-1y4wjl5");
      attr(span0, "class", "font-family_mono svelte-1y4wjl5");
      attr(div9, "class", "value svelte-1y4wjl5");
      attr(div10, "class", "info svelte-1y4wjl5");
      attr(div11, "class", "name svelte-1y4wjl5");
      attr(span1, "class", "font-family_mono svelte-1y4wjl5");
      attr(div12, "class", "value svelte-1y4wjl5");
      attr(div13, "class", "info svelte-1y4wjl5");
      attr(div14, "class", "name svelte-1y4wjl5");
      attr(div15, "class", "value svelte-1y4wjl5");
      attr(div16, "class", "info svelte-1y4wjl5");
      attr(div17, "class", "name svelte-1y4wjl5");
      attr(div18, "class", "value svelte-1y4wjl5");
      attr(div19, "class", "info svelte-1y4wjl5");
      attr(div20, "class", "name svelte-1y4wjl5");
      attr(div21, "class", "value svelte-1y4wjl5");
      attr(div22, "class", "info svelte-1y4wjl5");
      attr(div23, "class", "main svelte-1y4wjl5");
      attr(div24, "class", "menu svelte-1y4wjl5");
      attr(div25, "class", "bar svelte-1y4wjl5");
      attr(div26, "class", "vendor-menu svelte-1y4wjl5");
      toggle_class(div26, "collapsed", !ctx[6]);
    },
    m(target, anchor) {
      insert(target, div26, anchor);
      append(div26, div0);
      append(div26, t0);
      append(div26, div25);
      append(div25, div1);
      append(div25, t1);
      append(div25, div24);
      append(div24, div23);
      append(div23, div4);
      append(div4, div2);
      append(div4, t2);
      append(div4, div3);
      append(div23, t5);
      append(div23, div7);
      append(div7, div5);
      append(div7, t7);
      append(div7, div6);
      append(div6, t8);
      append(div23, t9);
      append(div23, div10);
      append(div10, div8);
      append(div10, t11);
      append(div10, div9);
      append(div9, span0);
      append(span0, t12);
      append(div23, t13);
      append(div23, div13);
      append(div13, div11);
      append(div13, t15);
      append(div13, div12);
      append(div12, span1);
      append(span1, t16);
      append(div23, t17);
      append(div23, div16);
      append(div16, div14);
      append(div16, t19);
      append(div16, div15);
      append(div15, t20);
      append(div15, t21);
      append(div23, t22);
      append(div23, div19);
      append(div19, div17);
      append(div19, t24);
      append(div19, div18);
      if_block.m(div18, null);
      append(div23, t25);
      append(div23, div22);
      append(div22, div20);
      append(div22, t27);
      append(div22, div21);
      append(div21, t28);
      if (!mounted) {
        dispose = [
          listen(div0, "click", ctx[8]),
          listen(div1, "click", ctx[9])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 4)
        set_data(t8, ctx2[2]);
      if (dirty & 16)
        set_data(t12, ctx2[4]);
      if (dirty & 8)
        set_data(t16, ctx2[3]);
      if (dirty & 1)
        set_data(t21, ctx2[0]);
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div18, null);
        }
      }
      if (dirty & 32)
        set_data(t28, ctx2[5]);
      if (dirty & 64) {
        toggle_class(div26, "collapsed", !ctx2[6]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div26);
      if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let $yw_chain_ref;
  let $yw_network;
  let $yw_menu_vendor;
  component_subscribe($$self, yw_chain_ref, ($$value) => $$invalidate(11, $yw_chain_ref = $$value));
  component_subscribe($$self, yw_network, ($$value) => $$invalidate(7, $yw_network = $$value));
  component_subscribe($$self, yw_menu_vendor, ($$value) => $$invalidate(6, $yw_menu_vendor = $$value));
  let s_height = "";
  let xt_when = 0;
  let xt_avg_block_time = 0;
  let s_network_status = "Loading";
  let p_provider = "";
  let si_chain = "";
  global_receive({
    blockInfo(g_info) {
      if ($yw_chain_ref === g_info.chain) {
        $$invalidate(2, s_network_status = "Online");
        $$invalidate(4, si_chain = g_info.header.chain_id);
        $$invalidate(0, s_height = g_info.header.height);
        xt_when = Date.now();
        const a_recents = g_info.recents;
        if (a_recents.length > 1) {
          const a_gaps = [];
          for (let i_each = 1; i_each < a_recents.length; i_each++) {
            a_gaps.push(a_recents[i_each] - a_recents[i_each - 1]);
          }
          $$invalidate(1, xt_avg_block_time = a_gaps.reduce((c_out, x_value) => c_out + x_value, 0) / a_gaps.length);
        }
      }
    }
  });
  let s_long_ago = "[...]";
  const i_long_ago = window.setInterval(
    () => {
      if (xt_when > 0) {
        const xt_ago = Date.now() - xt_when;
        $$invalidate(5, s_long_ago = `${Math.round(xt_ago / 1e3)} seconds ago`);
      }
    },
    500
  );
  onDestroy(() => {
    clearInterval(i_long_ago);
  });
  const click_handler2 = () => set_store_value(yw_menu_vendor, $yw_menu_vendor = false, $yw_menu_vendor);
  const click_handler_1 = () => set_store_value(yw_menu_vendor, $yw_menu_vendor = false, $yw_menu_vendor);
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 128) {
      if ($yw_network) {
        $$invalidate(0, s_height = "[...]");
        xt_when = 0;
        $$invalidate(1, xt_avg_block_time = 0);
        $$invalidate(2, s_network_status = "Connecting");
        $$invalidate(3, p_provider = new URL($yw_network.grpcWebUrl).host);
        $$invalidate(4, si_chain = "");
      }
    }
  };
  return [
    s_height,
    xt_avg_block_time,
    s_network_status,
    p_provider,
    si_chain,
    s_long_ago,
    $yw_menu_vendor,
    $yw_network,
    click_handler2,
    click_handler_1
  ];
}
class VendorMenu extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$4, safe_not_equal, {});
  }
}
class Page {
  constructor(gc_page, _kt_parent) {
    __publicField(this, "_dc_creator");
    __publicField(this, "_yc_component");
    __publicField(this, "_h_props");
    __publicField(this, "_h_context");
    __publicField(this, "_dm_page");
    __publicField(this, "_si_page");
    __publicField(this, "_h_events", {});
    __publicField(this, "_sr_path");
    __publicField(this, "_sx_pattern");
    this._kt_parent = _kt_parent;
    ({
      creator: this._dc_creator,
      props: this._h_props = {},
      context: this._h_context = {}
    } = gc_page);
    this._si_page = crypto.randomUUID();
    const dm_buffer = dd("div");
    const hm_context = new Map(ode({
      ...this._h_context,
      page: this
    }));
    this._yc_component = new this._dc_creator({
      target: dm_buffer,
      props: {
        ...this._h_props,
        k_page: this
      },
      context: hm_context
    });
    if (gc_page.events) {
      for (const [si_event, f_listener] of ode(gc_page.events)) {
        this._yc_component.$on(si_event, f_listener);
      }
    }
    const dm_state = dm_buffer.firstElementChild;
    if (!dm_state) {
      throw new Error(`No DOM element was created during page component spawning using: ${JSON.stringify(gc_page)}`);
    }
    this._dm_page = dm_state;
  }
  get id() {
    return this._si_page;
  }
  get index() {
    return this.thread.history.length;
  }
  get thread() {
    return this._kt_parent;
  }
  get creator() {
    return this._dc_creator;
  }
  get component() {
    return this._yc_component;
  }
  get props() {
    return this._h_props;
  }
  get dom() {
    return this._dm_page;
  }
  equivalent(w_other) {
    return w_other.creator === this.creator && !objects_might_differ(w_other.props || {}, this.props);
  }
  peak() {
    return this._kt_parent.peak();
  }
  push(gc_page) {
    return this._kt_parent.push(gc_page, this);
  }
  pop(gc_pop) {
    return this._kt_parent.pop(gc_pop || {}, this);
  }
  jump(gc_page, gc_jump) {
    return this._kt_parent.jump(gc_page, gc_jump || {}, this);
  }
  on(h_events) {
    for (const [si_event, f_listener] of ode(h_events)) {
      if (f_listener) {
        const a_listeners = this._h_events[si_event] = this._h_events[si_event] || [];
        a_listeners.push(f_listener);
      }
    }
  }
  async fire(si_event, a_args) {
    const a_listeners = this._h_events[si_event];
    if (a_listeners) {
      await Promise.all(a_listeners.map((f) => f(...a_args || [])));
    }
  }
  destroy() {
    this._yc_component.$destroy();
  }
  reset() {
    this._kt_parent.reset();
  }
}
class Thread {
  constructor(_si_thread, _gc_default, _k_navigator) {
    __publicField(this, "_dm_thread");
    __publicField(this, "_a_history", []);
    this._si_thread = _si_thread;
    this._gc_default = _gc_default;
    this._k_navigator = _k_navigator;
    this._dm_thread = dd("div", {
      "class": "thread",
      "data-thread-id": this._si_thread,
      "style": "z-index: 100;"
    });
  }
  get id() {
    return this._si_thread;
  }
  get default() {
    return this._gc_default;
  }
  get history() {
    return this._a_history;
  }
  get page() {
    return this._a_history[0];
  }
  get dom() {
    return this._dm_thread;
  }
  _place(gc_page) {
    const kp_new = new Page({
      ...gc_page,
      context: {
        ...this._k_navigator.context,
        ...gc_page.context
      }
    }, this);
    this._dm_thread.appendChild(kp_new.dom);
    this._a_history.unshift(kp_new);
    return kp_new;
  }
  reset(gc_page = this.default, gc_reset) {
    const {
      keepTop: b_keep_top
    } = gc_reset || {};
    const a_history = this._a_history;
    for (let i_state = b_keep_top ? 1 : 0; i_state < a_history.length; i_state++) {
      a_history[i_state].component.$destroy();
    }
    a_history.length = 0;
    const kp_new = this._place(gc_page);
    void this._k_navigator.after_reset(this, kp_new, gc_reset || {});
    return kp_new;
  }
  peak() {
    return this._a_history[1];
  }
  push(gc_page, kp_src) {
    if (kp_src !== this.page) {
      throw new Error("Prevented inactive page from pushing new screen");
    }
    if (!this._k_navigator.before_push(gc_page, kp_src, this)) {
      throw new Error("Prevented inactive thread from pushing new screen");
    }
    const kp_new = this._place(gc_page);
    void this._k_navigator.after_push(this, kp_src, kp_new);
    return kp_new;
  }
  pop(gc_pop, kp_src) {
    if (kp_src !== this.page) {
      throw new Error("Prevented inactive page from popping active screen");
    }
    if (this._a_history.length < 2) {
      throw new Error(`Failed to pop empty history`);
    }
    if (!this._k_navigator.before_pop(gc_pop, this._a_history[1], kp_src, this)) {
      throw new Error("Prevented inactive thread from popping active screen");
    }
    this._a_history.shift();
    const kp_dst = this.page;
    void this._k_navigator.after_pop(this, kp_src, kp_dst, gc_pop);
    return kp_dst;
  }
  jump(gc_page, gc_jump, kp_src) {
    if (kp_src !== this.page) {
      throw new Error("Prevented inactive page from jumping to screen");
    }
    if (!this._k_navigator.before_jump(gc_jump, gc_page, kp_src, this)) {
      throw new Error("Prevented inactive thread from jumping to screen");
    }
    const kp_prev = this._a_history[1];
    if (!gc_jump.force && kp_prev?.equivalent(gc_page)) {
      return this.pop({}, kp_src);
    }
    const kp_dst = new Page(gc_page, this);
    this.reset();
    set_zindex_relatively(kp_dst.dom, kp_src.dom, 1);
    void this._k_navigator.after_jump(this, kp_src, kp_dst, gc_jump).then(() => {
      try {
        kp_src.destroy();
      } catch (e_destroy) {
        console.warn(`Failed to destroy stale component belonging to page: ${kp_src.creator.name + ""}`);
        kp_src.dom.remove();
      }
    });
    return kp_dst;
  }
  hide() {
    this._dm_thread.style.display = "none";
  }
  show() {
    this._dm_thread.style.display = "initial";
  }
}
function set_zindex_relatively(dm_src, dm_dst, n_order) {
  const iz_src = +dm_src.style.zIndex;
  const iz_dst = iz_src + n_order;
  dm_src.style.zIndex = iz_src + "";
  dm_dst.style.zIndex = iz_dst + "";
}
class Navigator {
  constructor(_gc_navigator) {
    __publicField(this, "_h_threads", {});
    __publicField(this, "_h_thread_spawners");
    __publicField(this, "_dm_threads");
    __publicField(this, "_dm_buffer", dd("div"));
    __publicField(this, "_g_hooks");
    __publicField(this, "_h_context");
    __publicField(this, "_si_thread", ThreadId.DEFAULT);
    __publicField(this, "_c_thread_z", 200);
    this._gc_navigator = _gc_navigator;
    ({
      container: this._dm_threads,
      threads: this._h_thread_spawners,
      hooks: this._g_hooks,
      context: this._h_context = {}
    } = _gc_navigator);
    this._new_thread(ThreadId.DEFAULT);
  }
  get context() {
    return this._h_context;
  }
  _new_thread(si_thread, h_props = {}, h_context = {}) {
    const f_spawner = this._h_thread_spawners[si_thread];
    if (!f_spawner) {
      throw new Error(`Navigator has no such thread registered: '${si_thread}'`);
    }
    const kt_new = new Thread(si_thread, f_spawner(h_props, h_context), this);
    this._h_threads[si_thread] = kt_new;
    this._dm_threads.appendChild(kt_new.dom);
    kt_new.reset({
      ...kt_new.default,
      props: {
        ...kt_new.default.props,
        ...h_props
      }
    });
    return kt_new;
  }
  get activeThread() {
    return this._h_threads[this._si_thread];
  }
  get activePage() {
    return this.activeThread.page;
  }
  before_push(gc_page, kp_src, kt_child) {
    if (this.activeThread !== kt_child)
      return false;
    if (false === this._g_hooks.before_change?.(kt_child, kp_src, "push"))
      return false;
    if (false === this._g_hooks.before_push?.(kt_child, kp_src, gc_page))
      return false;
    return true;
  }
  before_pop(gc_pop, kp_dst, kp_src, kt_child) {
    if (this.activeThread !== kt_child)
      return false;
    if (false === this._g_hooks.before_change?.(kt_child, kp_src, "pop"))
      return false;
    if (false === this._g_hooks.before_pop?.(kt_child, kp_src, kp_dst, gc_pop))
      return false;
    return true;
  }
  before_jump(gc_jump, gc_page, kp_src, kt_child) {
    if (this.activeThread !== kt_child)
      return false;
    if (false === this._g_hooks.before_change?.(kt_child, kp_src, "jump"))
      return false;
    if (false === this._g_hooks.before_jump?.(kt_child, kp_src, gc_page, gc_jump))
      return false;
    return true;
  }
  async before_switch(kt_src, si_thread) {
    if (false === this._g_hooks.before_change?.(kt_src, kt_src.page, "switch"))
      throw new Error("Cannot stop thread switch");
    await this._g_hooks.before_switch?.(kt_src, si_thread);
  }
  async after_push(kt_child, kp_src, kp_dst) {
    const h_extra = await this._g_hooks.after_push?.(kt_child, kp_src, kp_dst);
    await this._g_hooks.after_change?.(kt_child, kp_src, kp_dst, "push", h_extra || {});
  }
  async after_pop(kt_child, kp_src, kp_dst, gc_pop) {
    const h_extra = await this._g_hooks.after_pop?.(kt_child, kp_src, kp_dst, gc_pop);
    await this._g_hooks.after_change?.(kt_child, kp_src, kp_dst, "pop", h_extra || {});
  }
  async after_jump(kt_child, kp_src, kp_dst, gc_jump) {
    const h_extra = await this._g_hooks.after_jump?.(kt_child, kp_src, kp_dst, gc_jump);
    await this._g_hooks.after_change?.(kt_child, kp_src, kp_dst, "jump", h_extra || {});
  }
  async after_reset(kt_child, kp_dst, gc_reset) {
    const h_extra = await this._g_hooks.after_reset?.(kt_child, kp_dst, gc_reset);
    await this._g_hooks.after_change?.(kt_child, null, kp_dst, "reset", h_extra || {});
  }
  async after_switch(kt_src, kt_dst) {
    await this._g_hooks.after_switch?.(kt_src, kt_dst);
  }
  async activateThread(si_thread, h_props = {}) {
    const kt_src = this.activeThread;
    const kp_src = this.activePage;
    let kt_dst = this._h_threads[si_thread];
    if (si_thread !== this._si_thread) {
      await this.before_switch(kt_src, si_thread);
      this._si_thread;
      if (!kt_dst) {
        kt_dst = this._new_thread(si_thread, h_props);
      } else if (objects_might_differ(kt_dst.default.props || {}, h_props)) {
        const kp_dst = new Page({
          ...kt_dst.default,
          props: h_props,
          context: this._h_context
        }, kt_dst);
        kt_dst.reset(kp_dst, {
          keepTop: true
        });
        set_zindex_relatively(kp_src.dom, kp_dst.dom, -1);
      }
      this._si_thread = si_thread;
      this.activeThread.show();
      this.activeThread.dom.style.zIndex = this._c_thread_z++ + "";
      await this.after_switch(kt_src, kt_dst);
      return true;
    }
    return false;
  }
}
var System_svelte_svelte_type_style_lang = "";
function create_if_block$1(ctx) {
  let await_block_anchor;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 25,
    blocks: [, , ,]
  };
  handle_promise(Vault.getRootKey(), info);
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    m(target, anchor) {
      insert(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function create_catch_block(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[25] && create_if_block_1();
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block_1(ctx) {
  let overscrollsvelte;
  let t0;
  let navsvelte;
  let t1;
  let searchsvelte;
  let t2;
  let vendormenusvelte;
  let t3;
  let sidemenusvelte;
  let t4;
  let popupsvelte;
  let current;
  overscrollsvelte = new Overscroll({});
  navsvelte = new Nav({});
  searchsvelte = new Search({});
  vendormenusvelte = new VendorMenu({});
  sidemenusvelte = new SideMenu({});
  popupsvelte = new Popup({});
  return {
    c() {
      create_component(overscrollsvelte.$$.fragment);
      t0 = space();
      create_component(navsvelte.$$.fragment);
      t1 = space();
      create_component(searchsvelte.$$.fragment);
      t2 = space();
      create_component(vendormenusvelte.$$.fragment);
      t3 = space();
      create_component(sidemenusvelte.$$.fragment);
      t4 = space();
      create_component(popupsvelte.$$.fragment);
    },
    m(target, anchor) {
      mount_component(overscrollsvelte, target, anchor);
      insert(target, t0, anchor);
      mount_component(navsvelte, target, anchor);
      insert(target, t1, anchor);
      mount_component(searchsvelte, target, anchor);
      insert(target, t2, anchor);
      mount_component(vendormenusvelte, target, anchor);
      insert(target, t3, anchor);
      mount_component(sidemenusvelte, target, anchor);
      insert(target, t4, anchor);
      mount_component(popupsvelte, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(overscrollsvelte.$$.fragment, local);
      transition_in(navsvelte.$$.fragment, local);
      transition_in(searchsvelte.$$.fragment, local);
      transition_in(vendormenusvelte.$$.fragment, local);
      transition_in(sidemenusvelte.$$.fragment, local);
      transition_in(popupsvelte.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(overscrollsvelte.$$.fragment, local);
      transition_out(navsvelte.$$.fragment, local);
      transition_out(searchsvelte.$$.fragment, local);
      transition_out(vendormenusvelte.$$.fragment, local);
      transition_out(sidemenusvelte.$$.fragment, local);
      transition_out(popupsvelte.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(overscrollsvelte, detaching);
      if (detaching)
        detach(t0);
      destroy_component(navsvelte, detaching);
      if (detaching)
        detach(t1);
      destroy_component(searchsvelte, detaching);
      if (detaching)
        detach(t2);
      destroy_component(vendormenusvelte, detaching);
      if (detaching)
        detach(t3);
      destroy_component(sidemenusvelte, detaching);
      if (detaching)
        detach(t4);
      destroy_component(popupsvelte, detaching);
    }
  };
}
function create_pending_block(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_fragment$3(ctx) {
  let main;
  let div0;
  let t0;
  let div1;
  let t1;
  let t2;
  let progresssvelte;
  let t3;
  let current;
  const default_slot_template = ctx[7].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[6], null);
  progresssvelte = new Progress({});
  let if_block = ctx[3] && create_if_block$1(ctx);
  return {
    c() {
      main = element("main");
      div0 = element("div");
      t0 = space();
      div1 = element("div");
      t1 = space();
      if (default_slot)
        default_slot.c();
      t2 = space();
      create_component(progresssvelte.$$.fragment);
      t3 = space();
      if (if_block)
        if_block.c();
      attr(div0, "class", "content threads svelte-m1b0zj");
      attr(div1, "class", "content exitting svelte-m1b0zj");
      attr(main, "class", "viewport svelte-m1b0zj");
    },
    m(target, anchor) {
      insert(target, main, anchor);
      append(main, div0);
      ctx[8](div0);
      append(main, t0);
      append(main, div1);
      ctx[9](div1);
      append(main, t1);
      if (default_slot) {
        default_slot.m(main, null);
      }
      append(main, t2);
      mount_component(progresssvelte, main, null);
      append(main, t3);
      if (if_block)
        if_block.m(main, null);
      ctx[10](main);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[6],
            !current ? get_all_dirty_from_scope(ctx2[6]) : get_slot_changes(default_slot_template, ctx2[6], dirty, null),
            null
          );
        }
      }
      if (ctx2[3])
        if_block.p(ctx2, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      transition_in(progresssvelte.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      transition_out(progresssvelte.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(main);
      ctx[8](null);
      ctx[9](null);
      if (default_slot)
        default_slot.d(detaching);
      destroy_component(progresssvelte);
      if (if_block)
        if_block.d();
      ctx[10](null);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $yw_navigator;
  let $yw_thread;
  let $yw_page;
  let $yw_account_ref;
  let $yw_account;
  let $yw_network_ref;
  let $yw_network_active;
  let $yw_chain_ref;
  let $yw_chain;
  component_subscribe($$self, yw_navigator, ($$value) => $$invalidate(11, $yw_navigator = $$value));
  component_subscribe($$self, yw_thread, ($$value) => $$invalidate(12, $yw_thread = $$value));
  component_subscribe($$self, yw_page, ($$value) => $$invalidate(13, $yw_page = $$value));
  component_subscribe($$self, yw_account_ref, ($$value) => $$invalidate(14, $yw_account_ref = $$value));
  component_subscribe($$self, yw_account, ($$value) => $$invalidate(15, $yw_account = $$value));
  component_subscribe($$self, yw_network_ref, ($$value) => $$invalidate(16, $yw_network_ref = $$value));
  component_subscribe($$self, yw_network_active, ($$value) => $$invalidate(17, $yw_network_active = $$value));
  component_subscribe($$self, yw_chain_ref, ($$value) => $$invalidate(18, $yw_chain_ref = $$value));
  component_subscribe($$self, yw_chain, ($$value) => $$invalidate(19, $yw_chain = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  let { page } = $$props;
  const gc_page = page;
  let { mode } = $$props;
  const b_flow = "flow" === mode;
  const b_main = "app" === mode;
  let dm_viewport;
  let dm_threads;
  let dm_exitting;
  const h_context_all = Object.fromEntries(getAllContexts().entries());
  async function slide2(dm_slide, b_in = false) {
    await timeout(0);
    return new Promise((fk_resolve) => {
      dm_slide.addEventListener("transitionend", function transition_end(d_event) {
        if ("transform" === d_event.propertyName) {
          dm_slide.classList.add("slid");
          fk_resolve();
        }
      });
      dm_slide.style.transform = `translateX(${b_in ? "0px" : "var(--app-window-width)"})`;
    });
  }
  onMount(async () => {
    const gc_navigator = {
      container: dm_threads,
      context: h_context_all,
      threads: {
        default: () => ({ creator: Blank })
      },
      hooks: {
        before_change(kt_context, kp_src, kp_dst) {
          void kp_src.fire("blur");
        },
        after_push(kt_context, kp_src, kp_dst) {
          void tick().then(() => {
            void slide2(kp_dst.dom, true);
          });
        },
        after_pop(kt_context, kp_src, kp_dst, gc_pop) {
          void kp_dst.fire("restore");
          if (!gc_pop.bypassAnimation) {
            kp_src.dom.style.transform = `translateX(var(--app-window-width))`;
          }
        },
        after_change(kt_context, kp_src, kp_dst, s_transition, h_extra = {}) {
          set_store_value(yw_page, $yw_page = kp_dst, $yw_page);
          set_store_value(yw_thread, $yw_thread = kt_context, $yw_thread);
          void kp_dst.fire("focus");
        },
        async before_switch() {
          try {
            await Promise.all([
              $yw_chain || once_store_updates(yw_chain, true),
              Chains.read().then((ks) => set_store_value(yw_chain_ref, $yw_chain_ref = ode(ks.raw)[0][0], $yw_chain_ref)),
              $yw_network_active || once_store_updates(yw_network_active, true),
              Networks.read().then((ks) => set_store_value(yw_network_ref, $yw_network_ref = ode(ks.raw)[0][0], $yw_network_ref)),
              $yw_account || once_store_updates(yw_account, true),
              Accounts.read().then((ks) => set_store_value(yw_account_ref, $yw_account_ref = ode(ks.raw)[0][0], $yw_account_ref))
            ]);
            delete this.before_switch;
          } catch (e_load_default) {
          }
        },
        async after_switch(kt_src, kt_dst) {
          set_store_value(yw_page, $yw_page = kt_dst.page, $yw_page);
          set_store_value(yw_thread, $yw_thread = kt_dst, $yw_thread);
          void kt_dst.page.fire("focus");
          await tick();
          await slide2(kt_dst.page.dom, true);
        }
      }
    };
    if (b_flow) {
      gc_navigator.threads = { default: () => gc_page };
    } else if (b_main) {
      gc_navigator.threads = oderom(H_THREADS, (si_thread, dc_screen) => {
        return {
          [si_thread]: (h_props) => ({ creator: dc_screen, props: h_props })
        };
      });
      gc_navigator.threads.init = (h_props, h_context) => ({
        ...gc_page,
        props: { ...gc_page.props, ...h_props },
        context: { ...gc_page.context, ...h_context }
      });
    }
    const k_navigator = new Navigator(gc_navigator);
    set_store_value(yw_navigator, $yw_navigator = k_navigator, $yw_navigator);
  });
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      dm_threads = $$value;
      $$invalidate(1, dm_threads);
    });
  }
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      dm_exitting = $$value;
      $$invalidate(2, dm_exitting);
    });
  }
  function main_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      dm_viewport = $$value;
      $$invalidate(0, dm_viewport);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("page" in $$props2)
      $$invalidate(4, page = $$props2.page);
    if ("mode" in $$props2)
      $$invalidate(5, mode = $$props2.mode);
    if ("$$scope" in $$props2)
      $$invalidate(6, $$scope = $$props2.$$scope);
  };
  return [
    dm_viewport,
    dm_threads,
    dm_exitting,
    b_main,
    page,
    mode,
    $$scope,
    slots,
    div0_binding,
    div1_binding,
    main_binding
  ];
}
class System extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$3, safe_not_equal, { page: 4, mode: 5 });
  }
}
var Authenticate_svelte_svelte_type_style_lang = "";
function create_if_block(ctx) {
  let div;
  let t;
  let div_transition;
  let current;
  return {
    c() {
      div = element("div");
      t = text(ctx[1]);
      attr(div, "class", "validation-message");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t);
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty & 2)
        set_data(t, ctx2[1]);
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, slide, { duration: 300 }, true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, slide, { duration: 300 }, false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_default_slot_1(ctx) {
  let input;
  let t;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[1] && create_if_block(ctx);
  return {
    c() {
      input = element("input");
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr(input, "type", "password");
      attr(input, "name", "password");
      attr(input, "placeholder", "Password");
      toggle_class(input, "invalid", ctx[1]);
    },
    m(target, anchor) {
      insert(target, input, anchor);
      set_input_value(input, ctx[0]);
      insert(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(input, "input", ctx[4]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 1 && input.value !== ctx2[0]) {
        set_input_value(input, ctx2[0]);
      }
      if (dirty & 2) {
        toggle_class(input, "invalid", ctx2[1]);
      }
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(input);
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot$1(ctx) {
  let div0;
  let t0;
  let div1;
  let t1;
  let div2;
  let t3;
  let div3;
  let field;
  let t4;
  let actionsline;
  let t5;
  let log_1;
  let updating_items;
  let current;
  field = new Field({
    props: {
      key: "password",
      name: "",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  actionsline = new ActionsLine({
    props: {
      confirm: ["Unlock", ctx[3]]
    }
  });
  function log_1_items_binding(value) {
    ctx[5](value);
  }
  let log_1_props = { hide: true };
  if (ctx[2].items !== void 0) {
    log_1_props.items = ctx[2].items;
  }
  log_1 = new Log({ props: log_1_props });
  binding_callbacks.push(() => bind(log_1, "items", log_1_items_binding));
  return {
    c() {
      div0 = element("div");
      div0.innerHTML = `<img width="96" src="/media/vendor/logo-96px.png" srcset="/media/vendor/logo-96px.png 1x, /media/vendor/logo-192px.png 2x" alt="StarShell"/>`;
      t0 = space();
      div1 = element("div");
      div1.innerHTML = `<img src="/media/vendor/title.svg" alt=""/>`;
      t1 = space();
      div2 = element("div");
      div2.textContent = "\xA0";
      t3 = space();
      div3 = element("div");
      create_component(field.$$.fragment);
      t4 = space();
      create_component(actionsline.$$.fragment);
      t5 = space();
      create_component(log_1.$$.fragment);
      attr(div0, "class", "logo");
      attr(div1, "class", "title");
      attr(div2, "class", "line svelte-wsweyo");
      attr(div3, "class", "form flex-rows");
    },
    m(target, anchor) {
      insert(target, div0, anchor);
      insert(target, t0, anchor);
      insert(target, div1, anchor);
      insert(target, t1, anchor);
      insert(target, div2, anchor);
      insert(target, t3, anchor);
      insert(target, div3, anchor);
      mount_component(field, div3, null);
      insert(target, t4, anchor);
      mount_component(actionsline, target, anchor);
      insert(target, t5, anchor);
      mount_component(log_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const field_changes = {};
      if (dirty & 1027) {
        field_changes.$$scope = { dirty, ctx: ctx2 };
      }
      field.$set(field_changes);
      const log_1_changes = {};
      if (!updating_items && dirty & 4) {
        updating_items = true;
        log_1_changes.items = ctx2[2].items;
        add_flush_callback(() => updating_items = false);
      }
      log_1.$set(log_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(field.$$.fragment, local);
      transition_in(actionsline.$$.fragment, local);
      transition_in(log_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(field.$$.fragment, local);
      transition_out(actionsline.$$.fragment, local);
      transition_out(log_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div2);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(div3);
      destroy_component(field);
      if (detaching)
        detach(t4);
      destroy_component(actionsline, detaching);
      if (detaching)
        detach(t5);
      destroy_component(log_1, detaching);
    }
  };
}
function create_fragment$2(ctx) {
  let t;
  let screen;
  let current;
  screen = new Screen({
    props: {
      debug: "Authenticate",
      classNames: "welcome",
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      t = space();
      create_component(screen.$$.fragment);
    },
    m(target, anchor) {
      insert(target, t, anchor);
      mount_component(screen, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const screen_changes = {};
      if (dirty & 1031) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t);
      destroy_component(screen, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  const completed = getContext("completed");
  let sh_password = "";
  let s_err_password = "";
  let b_busy = false;
  let xt_start = 0;
  let k_logger = new Logger();
  function log(s_msg) {
    $$invalidate(2, k_logger = k_logger.event(s_msg, Date.now() - xt_start));
  }
  async function attempt_unlock(b_recover = false) {
    if (b_busy)
      return 1;
    b_busy = true;
    const exit = () => (b_busy = false, 1);
    $$invalidate(1, s_err_password = "");
    xt_start = Date.now();
    log("Estimating time to complete");
    {
      const xt_start_est = window.performance.now();
      await Vault.deriveRootBits(ATU8_DUMMY_PHRASE, ATU8_DUMMY_VECTOR, 1 / 50);
      const xt_finish_est = window.performance.now();
      const xt_elapsed = xt_finish_est - xt_start_est;
      const xt_estimate = 2 * (xt_elapsed * 50);
      log(`About ${(xt_estimate / 1e3).toFixed(1)} seconds`);
    }
    try {
      await login(sh_password, b_recover, log);
    } catch (e_login) {
      if (e_login instanceof UnregisteredError) {
        $$invalidate(1, s_err_password = "No accounts detected");
      } else if (e_login instanceof InvalidPassphraseError) {
        $$invalidate(1, s_err_password = "Invalid passphrase");
      } else if (e_login instanceof RecoverableVaultError) {
        $$invalidate(1, s_err_password = "Vault is partially corrupted; attempting recovery...");
        return await attempt_unlock(true);
      } else if (b_recover) {
        $$invalidate(1, s_err_password = `Recovery failed. Vault may be irreparably corrupted.
${e_login.message}`);
      } else if (e_login instanceof CorruptedVaultError) {
        $$invalidate(1, s_err_password = `Vault appears to be irreparably corrupted.
${e_login.message}`);
      } else {
        $$invalidate(1, s_err_password = `Unknown error occurred: ${e_login.stack || e_login.message}`);
      }
      return exit();
    }
    if (completed)
      completed(true);
    return exit();
  }
  function input_input_handler() {
    sh_password = this.value;
    $$invalidate(0, sh_password);
  }
  function log_1_items_binding(value) {
    if ($$self.$$.not_equal(k_logger.items, value)) {
      k_logger.items = value;
      $$invalidate(2, k_logger);
    }
  }
  return [
    sh_password,
    s_err_password,
    k_logger,
    attempt_unlock,
    input_input_handler,
    log_1_items_binding
  ];
}
class Authenticate extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$2, safe_not_equal, {});
  }
}
const dm_log = qs(document, "section#dom-log");
const dm_log_list = qs(document, "#dom-log-list");
function domlog(si_msg) {
  console.log(si_msg);
  dm_log_list?.append(dd("li", {}, [
    dd("pre", {}, [si_msg])
  ]));
}
var Horizon_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div;
  let raw_value = "&nbsp;";
  return {
    c() {
      div = element("div");
      attr(div, "class", "no-margin horizon svelte-12kmiz9");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      div.innerHTML = raw_value;
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
class Horizon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$1, safe_not_equal, {});
  }
}
var PreRegister_svelte_svelte_type_style_lang = "";
function create_default_slot(ctx) {
  let starshelllogo;
  let t0;
  let starshelltitle;
  let t1;
  let horizon;
  let t2;
  let div2;
  let t6;
  let p2;
  let t7;
  let actionsline;
  let current;
  starshelllogo = new StarShellLogo({ props: { dim: 96 } });
  starshelltitle = new StarShellTitle({});
  horizon = new Horizon({});
  actionsline = new ActionsLine({
    props: {
      confirm: ["Get Started"],
      contd: { creator: Register }
    }
  });
  return {
    c() {
      create_component(starshelllogo.$$.fragment);
      t0 = space();
      create_component(starshelltitle.$$.fragment);
      t1 = space();
      create_component(horizon.$$.fragment);
      t2 = space();
      div2 = element("div");
      div2.innerHTML = `<div>Welcome to the beta program.</div> 
		<div>Thank for you being a tester!</div>`;
      t6 = space();
      p2 = element("p");
      t7 = space();
      create_component(actionsline.$$.fragment);
      attr(div2, "class", "large");
    },
    m(target, anchor) {
      mount_component(starshelllogo, target, anchor);
      insert(target, t0, anchor);
      mount_component(starshelltitle, target, anchor);
      insert(target, t1, anchor);
      mount_component(horizon, target, anchor);
      insert(target, t2, anchor);
      insert(target, div2, anchor);
      insert(target, t6, anchor);
      insert(target, p2, anchor);
      insert(target, t7, anchor);
      mount_component(actionsline, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(starshelllogo.$$.fragment, local);
      transition_in(starshelltitle.$$.fragment, local);
      transition_in(horizon.$$.fragment, local);
      transition_in(actionsline.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(starshelllogo.$$.fragment, local);
      transition_out(starshelltitle.$$.fragment, local);
      transition_out(horizon.$$.fragment, local);
      transition_out(actionsline.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(starshelllogo, detaching);
      if (detaching)
        detach(t0);
      destroy_component(starshelltitle, detaching);
      if (detaching)
        detach(t1);
      destroy_component(horizon, detaching);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(div2);
      if (detaching)
        detach(t6);
      if (detaching)
        detach(p2);
      if (detaching)
        detach(t7);
      destroy_component(actionsline, detaching);
    }
  };
}
function create_fragment(ctx) {
  let screen;
  let current;
  screen = new Screen({
    props: {
      root: true,
      classNames: "preregister",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(screen.$$.fragment);
    },
    m(target, anchor) {
      mount_component(screen, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const screen_changes = {};
      if (dirty & 1) {
        screen_changes.$$scope = { dirty, ctx: ctx2 };
      }
      screen.$set(screen_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(screen.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(screen.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(screen, detaching);
    }
  };
}
class PreRegister extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export { AccountEdit as A, Blank as B, Header as H, PreRegister as P, Screen as S, ThreadId as T, StarShellLogo as a, StarShellTitle as b, Horizon as c, dm_log as d, System as e, domlog as f, Authenticate as g };