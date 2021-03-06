<template>
  <div class="asn-app-item">
    <el-button type="text" icon="el-icon-back" size="medium" @click="goBack">返回</el-button>
    <h3>基本信息</h3>
    <div class="info">
      <img :src="app.icon | imgPrefix" alt="icon" />
      <div class="info-desc">
        <div class="header">
          <h3>{{ app.name }}</h3>
          <div>
            <el-link type="danger" :href="app.id | appContentPrefix('web')" target="_blank" :disabled="isNew">前往托管网站修改描述文章</el-link>
            <el-button type="primary" size="mini" @click="openAppDialog">修改基础信息</el-button>
          </div>
        </div>
        <p>
          <span>
            <i>类型: </i>
            <el-tag type="warning">{{ app.type | asnTranslate }}</el-tag>
          </span>
          <span>
            <i>是否发布: </i>
            <el-switch :value="app.status" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </span>
          <span>
            <i>分类: </i>
            <el-tag type="warning">{{ app.category | asnTranslate(categories) }}</el-tag>
          </span>
          <span class="tags">
            <i>标签: </i>
            <el-tag v-for="tag in app.tags" :key="tag.id">{{ tag.tagId | asnTranslate(tags) }}</el-tag>
          </span>
          <span>
            <i>浏览量: </i>
            <el-tag type="danger">{{ app.view }}</el-tag>
          </span>
          <span>
            <i>下载量: </i>
            <el-tag type="danger">{{ app.hot }}</el-tag>
          </span>
          <span>
            <i>版本更新时间: </i>
            <el-tag type="info">{{ app.versionAt | dateTimeFormat }}</el-tag>
          </span>
        </p>
        <blockquote>
          <p>
            {{ app.title }}
          </p>
        </blockquote>
      </div>
    </div>
    <div class="version">
      <h3>版本</h3>
      <el-button type="primary" size="mini" @click="addVersion" :disabled="isNew">添加版本</el-button>

      <el-table :data="app.versions" style="width: 100%">
        <el-table-column type="index" width="50" />
        <el-table-column prop="name" label="版本号" width="100" />
        <el-table-column prop="size" label="文件大小" width="100" />
        <el-table-column label="状态" width="100">
          <template #default="scope">
            <el-switch :value="scope.row.status" active-color="#13ce66" inactive-color="#ff4949" />
          </template>
        </el-table-column>
        <el-table-column prop="createdAt" label="更新时间" :formatter="tableDateTimeFormatter" width="150" />
        <el-table-column label="下载渠道">
          <template slot-scope="scope">
            <span v-for="d in scope.row.downloads" :key="d.id">
              <el-button type="text">{{ d.downloadId | asnTranslate(downloads) }}</el-button>
              <el-button type="text" icon="el-icon-document-copy" :class="`asn-copy-${d.id}`" @click="clipboard(d.id, d.secret)">复制秘钥</el-button>
              <el-divider direction="vertical"></el-divider>
            </span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template #default="scope">
            <el-button type="text" size="small" @click="editVersion(scope.row)">编辑</el-button>
            <el-button type="text" size="small" style="color:#F56C6C;">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- dialog -->
    <!--  app信息修改dialog  -->
    <el-dialog title="app/book信息 (注意: 轮播图第一张为icon)" :visible.sync="appDialogVisible" width="70%">
      <el-form :model="appForm" label-width="90px" label-position="left">
        <el-form-item label="icon/轮播图">
          <asn-upload :file-list="appForm.carousels" @on-success="onUploadSuccess" @on-remove="onUploadRemove" :limit="5"></asn-upload>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="appForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="简述">
          <el-input v-model="appForm.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="appForm.type" collapse-tags placeholder="请选择">
            <el-option v-for="(itemName, itemId) in appTypes" :key="itemId" :label="itemName" :value="Math.trunc(itemId)"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="appForm.category" collapse-tags placeholder="请选择">
            <el-option v-for="(itemName, itemId) in categories" :key="itemId" :label="itemName" :value="Math.trunc(itemId)"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标签">
          <el-select v-model="appForm.tags" value-key="tagId" multiple collapse-tags placeholder="请选择">
            <el-option v-for="(itemName, itemId) in tags" :key="itemId" :label="itemName" :value="{ tagId: Math.trunc(itemId) }"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否发布" prop="status">
          <el-switch v-model="appForm.status"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="appDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="appDialogConfirm">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 版本dialog -->
    <el-dialog title="版本信息" :visible.sync="versionDialogVisible" width="70%" class="version-dialog">
      <el-form :model="versionForm" label-width="90px" label-position="left">
        <el-form-item label="版本名称">
          <el-input v-model="versionForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文件大小">
          <el-input v-model="versionForm.size" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="是否发布" prop="status">
          <el-switch v-model="versionForm.status"></el-switch>
        </el-form-item>
        <el-form-item v-for="(download, index) in versionForm.downloads" :label="'渠道' + (index + 1)" :key="download.id">
          <el-select v-model="download.downloadId" placeholder="请选择下载渠道" :value="download.downloadId">
            <el-option v-for="(dName, dType) in downloads" :key="dType" :label="dName" :value="Math.trunc(dType)"></el-option>
          </el-select>
          <i>url: </i>
          <el-input v-model="download.url" autocomplete="off" class="version-secret-input"></el-input>
          <i>秘钥: </i>
          <el-input v-model="download.secret" autocomplete="off" class="version-secret-input"></el-input>
          <el-button type="danger" @click.prevent="removeDownload(index)" style="margin-left: 1em;">删除</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="versionDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addDownload">添加下载渠道</el-button>
        <el-button type="primary" @click="versionDialogConfirm">确 定</el-button>
      </div>
    </el-dialog>

    <!-- <el-form ref="form" :model="app" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="app.name"></el-input>
      </el-form-item>
      <el-form-item label="轮播图">
        <asn-upload :file-list="app.carousels" :on-success="uploadCarouselSuccess" :limit="5"></asn-upload>
      </el-form-item>
      <el-form-item label="是否发布">
        <el-switch v-model="app.status" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form> -->
  </div>
</template>

<script>
import { apiAuthGetApp, apiAppCU } from 'src/api/app';
import { apiVersionCU } from 'src/api/version';
import { ASN_API } from 'src/const';
import AsnUpload from 'src/components/upload';
import Clipboard from 'clipboard';
import tableMix from 'src/utils/mixins/table';
import { AESDecrypt } from 'src/utils/common/encrypt';
import _ from 'loadsh';

export default {
  mixins: [tableMix],
  data() {
    return {
      app: {
        name: '',
        carousels: [],
        versions: [],
      },
      appDialogVisible: false,
      versionDialogVisible: false,
      appForm: {},
      versionForm: {},
      disabled: false,
      uploadApi: ASN_API.uploadApi,
      tts: [{ tagId: 1 }, { tagId: 2 }],
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    search() {
      if (this.isNew) {
        this.openAppDialog();
        return;
      }
      apiAuthGetApp(this.appId).then(resp => {
        this.app = resp;
      });
    },
    clipboard(id, secret) {
      let clipboard = new Clipboard(`.asn-copy-${id}`, {
        text() {
          return AESDecrypt(secret);
        },
      });
      clipboard.on('success', () => {
        this.$message.success('复制成功');
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on('error', () => {
        // 不支持复制
        this.$message.error('复制失败');
        // 释放内存
        clipboard.destroy();
      });
    },
    // app dialog
    openAppDialog() {
      let appFormData = _.cloneDeep(this.app);
      if (!this.isNew) {
        appFormData.carousels.push({ url: appFormData.icon });
      }
      this.appForm = appFormData;
      this.appDialogVisible = true;
    },
    onUploadSuccess(file) {
      this.appForm.carousels.push(file);
    },
    onUploadRemove(index) {
      this.appForm.carousels.splice(index, 1);
      console.log(this.appForm.carousels);
    },
    appDialogConfirm() {
      apiAppCU(this.appId, this.appForm)
        .then(resp => {
          resp.versions = this.app.versions;
          this.app = resp;
          if (this.isNew) {
            this.$router.push({ name: 'asn-app-item', params: { id: resp.id } });
          }
        })
        .finally(() => {
          this.appDialogVisible = false;
        });
    },

    // version dialog
    addVersion() {
      this.versionForm = { downloads: [] };
      this.versionDialogVisible = true;
    },
    editVersion(row) {
      let rowCopy = _.cloneDeep(row);
      rowCopy.downloads.forEach((el, index) => {
        rowCopy.downloads[index].secret = AESDecrypt(el.secret);
      });
      this.versionForm = rowCopy;
      this.versionDialogVisible = true;
    },
    addDownload() {
      this.versionForm.downloads.push({});
    },
    removeDownload(index) {
      this.versionForm.downloads.splice(index, 1);
    },
    versionDialogConfirm() {
      apiVersionCU(this.appId, this.versionForm)
        .then(resp => {
          let index = this.app.versions.findIndex(el => {
            return el.id === resp.id;
          });
          if (index > -1) {
            this.$set(this.app.versions, index, resp);
          } else {
            this.app.versions.unshift(resp);
          }
        })
        .finally(() => {
          this.versionDialogVisible = false;
        });
    },
  },
  computed: {
    token() {
      return { Authorization: `Bearer ${this.$store.getters.token}` };
    },
    appId() {
      return this.$route.params.id;
    },
    isNew() {
      return this.$route.params.id === 'new';
    },
  },
  components: {
    AsnUpload,
  },
};
</script>
