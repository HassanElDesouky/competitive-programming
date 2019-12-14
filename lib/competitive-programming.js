'use babel';

import CompetitiveProgrammingView from './competitive-programming-view';
import { CompositeDisposable } from 'atom';

export default {

  competitiveProgrammingView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.competitiveProgrammingView = new CompetitiveProgrammingView(state.competitiveProgrammingViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.competitiveProgrammingView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'competitive-programming:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.competitiveProgrammingView.destroy();
  },

  serialize() {
    return {
      competitiveProgrammingViewState: this.competitiveProgrammingView.serialize()
    };
  },

  toggle() {
    let editor
    let self = this
    cppLiberary = '#include "bits/stdc++.h"\n\nusing namespace std;\n#define el "\\n"\n#define F first\n#define S second\n#define PI 3.14159265358979323846  /* pi */\n#define FOR(i,a,b) for(int i = a; i <= b; ++i)\n#define FORD(i,a,b) for(int i = a; i >= b; --i)\n#define RI(i,n) FOR(i,1,n)\n#define REP(i,n) FOR(i,0,(n)-1)\n#define SQR(x) (x)*(x)\n#define all(v)  	((v).begin()),((v).end())\n#define degreesToRadians(angleDegrees) (angleDegrees * PI / 180.0) // Converts degrees to radians.\n#define radiansToDegrees(angleRadians) (angleRadians * 180.0 / PI) // Converts radians to degrees.\ntypedef long long ll;\ntypedef pair<int, int>	pii;\ntypedef pair<ll, ll>	pll;\ntypedef long double ld;\ntypedef vector<int>		vi;\ntypedef vector<ll>		vll;\ntypedef vector<pii>		vpii;\ntypedef vector<pll>		vpll;\nconst double EPS = 1e-9;\nconst int N = 1e3+2, M = 3e5+5, OO = 0x3f3f3f3f;\n// int dx[] = {1,-1,0,0} , dy[] = {0,0,1,-1}; // 4 Direction\n// int dx[] = {1,-1,0,0,1,1,-1,-1}, dy[] = {0,0,1,-1,1,-1,1,-1}; // 8 Direction\n// int dx[] = {1,-1,1,-1,2,2,-2,-2} , dy[] = {2,2,-2,-2,1,-1,1,-1}; // Knight Direction\n// int dx[] = {2,-2,1,1,-1,-1} , dy[] = {0,0,1,-1,1,-1}; // Hexagonal Direction\nint main(){\n\tios::sync_with_stdio(false); cin.tie(0); cout.tie(0);\n\t// freopen("input.txt", "r", stdin);\n\t// freopen("output.txt", "w", stdout);\n\n\treturn 0;\n}'
    if (editor = atom.workspace.getActiveTextEditor()) {
        let language = editor.getGrammar().name
        switch (language) {
          case 'C++':
            editor.insertText(cppLiberary);
            break;
          default:
            atom.notifications.addError('Language is not supported, you can go to the \'~/template-atom/lib/template-atom.js\' file and add you template yourself!');
        }
    }
  }

};
